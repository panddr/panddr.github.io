if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

// var SimplexNoise = require('../lib/SimplexNoise.js');
// var GPUComputationRenderer = require('../lib/GPUComputationRenderer.js');

// console.log(SimplexNoise);
// console.log(GPUComputationRenderer);

AFRAME.registerComponent('water', {
  schema: {
    bounds: {type: 'number', default: 128},
    color: {type: 'number', default: 0x0040C0},
    width: {type: 'number', default: 50},
  },

  init: function () {
    this.model = null;
    this.renderer = null;
  },

  update: function () {
    this.remove();
    var that = this;
    that.el.sceneEl.addEventListener('render-target-loaded', function () {
      that.renderer = that.el.sceneEl.renderer;
      that.initMeshes();
    });
  },

  remove: function () {
    if (this.model === null) { return; }
    this.el.removeObject3D('water-mesh');
    this.el.removeObject3D('mesh-ray');
  },

  tick: function(time, delta) {
    if (this.model === null) { return; }

    // Set uniforms: mouse interaction
    var uniforms = this.heightmapVariable.material.uniforms;
    var mouseMoved = this.mouseMoved;
    var gpuCompute = this.gpuCompute;
    var waterUniforms = this.waterUniforms;
    if ( mouseMoved ) {
      this.raycaster.setFromCamera( mouseCoords, camera );
      var intersects = this.raycaster.intersectObject( meshRay );
      if ( intersects.length > 0 ) {
        var point = intersects[ 0 ].point;
        uniforms.mousePos.value.set( point.x, point.z );
      }
      else {
        uniforms.mousePos.value.set( 10000, 10000 );
      }
      mouseMoved = false;
    }
    else {
      uniforms.mousePos.value.set( 10000, 10000 );
    }
    // Do the gpu computation
    gpuCompute.compute();
    // Get compute output in custom uniform
    waterUniforms.heightmap.value = gpuCompute.getCurrentRenderTarget( this.heightmapVariable ).texture;
  },

  initMeshes: function() {
    var el = this.el;
    var data = this.data;
    var scene = el.sceneEl;
    var renderer = this.renderer;

    // Texture width for simulation
    var WIDTH = data.width;
    var NUM_TEXELS = WIDTH * WIDTH;
    // Water size in system units
    var BOUNDS = data.bounds;
    var BOUNDS_HALF = BOUNDS * 0.5;

    var color = data.color;

    var mouseMoved = false;
    var mouseCoords = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    var waterMesh;
    var meshRay;
    var gpuCompute;
    var heightmapVariable;
    var waterUniforms;
    var smoothShader;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var simplex = new SimplexNoise();

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
    window.addEventListener( 'resize', onWindowResize, false );

    var effectController = {
      mouseSize: 20.0,
      viscosity: 0.03
    };

    var valuesChanger = function() {
      heightmapVariable.material.uniforms.mouseSize.value = effectController.mouseSize;
      heightmapVariable.material.uniforms.viscosityConstant.value = effectController.viscosity;
    };

    initWater();
    valuesChanger();

    function initWater() {
      var materialColor = color;
      var geometry = new THREE.PlaneBufferGeometry( BOUNDS, BOUNDS, WIDTH - 1, WIDTH -1 );
      // material: make a ShaderMaterial clone of MeshPhongMaterial, with customized vertex shader
      var material = new THREE.ShaderMaterial( {
        fog: true,
        uniforms: THREE.UniformsUtils.merge( [
          THREE.ShaderLib[ 'phong' ].uniforms,
          {
            heightmap: { value: null }
          }
        ] ),
        vertexShader: document.getElementById( 'waterVertexShader' ).textContent,
        fragmentShader: THREE.ShaderChunk[ 'meshphong_frag' ]
      } );
      material.lights = true;
      // Material attributes from MeshPhongMaterial
      material.color = new THREE.Color( materialColor );
      material.specular = new THREE.Color( 0x111111 );
      material.shininess = 100;
      // Sets the uniforms with the material values
      material.uniforms.diffuse.value = material.color;
      material.uniforms.specular.value = material.specular;
      material.uniforms.shininess.value = Math.max( material.shininess, 1e-4 );
      material.uniforms.opacity.value = material.opacity;
      // Defines
      material.defines.WIDTH = WIDTH.toFixed( 1 );
      material.defines.BOUNDS = BOUNDS.toFixed( 1 );
      waterUniforms = material.uniforms;
      waterMesh = new THREE.Mesh( geometry, material );
      waterMesh.rotation.x = - Math.PI / 2;
      waterMesh.matrixAutoUpdate = false;
      waterMesh.updateMatrix();
      // scene.add( waterMesh );
      // Mesh just for mouse raycasting
      var geometryRay = new THREE.PlaneBufferGeometry( BOUNDS, BOUNDS, 1, 1 );
      meshRay = new THREE.Mesh( geometryRay, new THREE.MeshBasicMaterial( { color: 0xFFFFFF, visible: false } ) );
      meshRay.rotation.x = - Math.PI / 2;
      meshRay.matrixAutoUpdate = false;
      meshRay.updateMatrix();
      // scene.add( meshRay );
      // Creates the gpu computation class and sets it up
      gpuCompute = new GPUComputationRenderer( WIDTH, WIDTH, renderer );
      var heightmap0 = gpuCompute.createTexture();
      fillTexture( heightmap0 );
      heightmapVariable = gpuCompute.addVariable( "heightmap", document.getElementById( 'heightmapFragmentShader' ).textContent, heightmap0 );
      gpuCompute.setVariableDependencies( heightmapVariable, [ heightmapVariable ] );
      heightmapVariable.material.uniforms.mousePos = { value: new THREE.Vector2( 10000, 10000 ) };
      heightmapVariable.material.uniforms.mouseSize = { value: 20.0 };
      heightmapVariable.material.uniforms.viscosityConstant = { value: 0.03 };
      heightmapVariable.material.defines.BOUNDS = BOUNDS.toFixed( 1 );
      var error = gpuCompute.init();
      if ( error !== null ) {
        console.error( error );
      }
      // Create compute shader to smooth the water surface and velocity
      smoothShader = gpuCompute.createShaderMaterial( document.getElementById( 'smoothFragmentShader' ).textContent, { texture: { value: null } } );
    }

    function fillTexture( texture ) {
      var waterMaxHeight = 10;
      function noise( x, y, z ) {
        var multR = waterMaxHeight;
        var mult = 0.025;
        var r = 0;
        for ( var i = 0; i < 15; i++ ) {
          r += multR * simplex.noise3d( x * mult, y * mult, z * mult );
          multR *= 0.53 + 0.025 * i;
          mult *= 1.25;
        }
        return r;
      }
      var pixels = texture.image.data;
      var p = 0;
      for ( var j = 0; j < WIDTH; j++ ) {
        for ( var i = 0; i < WIDTH; i++ ) {
          var x = i * 128 / WIDTH;
          var y = j * 128 / WIDTH;
          pixels[ p + 0 ] = noise( x, y, 123.4 );
          pixels[ p + 1 ] = 0;
          pixels[ p + 2 ] = 0;
          pixels[ p + 3 ] = 1;
          p += 4;
        }
      }
    }

    function smoothWater() {
      var currentRenderTarget = gpuCompute.getCurrentRenderTarget( heightmapVariable );
      var alternateRenderTarget = gpuCompute.getAlternateRenderTarget( heightmapVariable );
      for ( var i = 0; i < 10; i++ ) {
        smoothShader.uniforms.texture.value = currentRenderTarget.texture;
        gpuCompute.doRenderTarget( smoothShader, alternateRenderTarget );
        smoothShader.uniforms.texture.value = alternateRenderTarget.texture;
        gpuCompute.doRenderTarget( smoothShader, currentRenderTarget );
      }
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    }

    function setMouseCoords( x, y ) {
      mouseCoords.set( ( x / renderer.domElement.clientWidth ) * 2 - 1, - ( y / renderer.domElement.clientHeight ) * 2 + 1 );
      mouseMoved = true;
    }

    function onDocumentMouseMove( event ) {
      setMouseCoords( event.clientX, event.clientY );
    }

    function onDocumentTouchStart( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        setMouseCoords( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
      }
    }

    function onDocumentTouchMove( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        setMouseCoords( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
      }
    }

    var heightmapFragmentShader = [
      '#include <common>',
      'uniform vec2 mousePos;',
      'uniform float mouseSize;',
      'uniform float viscosityConstant;',
      '#define deltaTime ( 1.0 / 60.0 )',
      '#define GRAVITY_CONSTANT ( resolution.x * deltaTime * 3.0 )',
      'void main() {',
      '  vec2 cellSize = 1.0 / resolution.xy;',
      '  vec2 uv = gl_FragCoord.xy * cellSize;',
      '  vec4 heightmapValue = texture2D( heightmap, uv );',
      '  vec4 north = texture2D( heightmap, uv + vec2( 0.0, cellSize.y ) );',
      ' vec4 south = texture2D( heightmap, uv + vec2( 0.0, - cellSize.y ) );',
      '  vec4 east = texture2D( heightmap, uv + vec2( cellSize.x, 0.0 ) );',
      '  vec4 west = texture2D( heightmap, uv + vec2( - cellSize.x, 0.0 ) );',
      '  float sump = north.x + south.x + east.x + west.x - 4.0 * heightmapValue.x;',
      '  float accel = sump * GRAVITY_CONSTANT;',
      '  heightmapValue.y += accel;',
      '  heightmapValue.x += heightmapValue.y * deltaTime;',
      '  heightmapValue.x += sump * viscosityConstant;',
      '  float mousePhase = clamp( length( ( uv - vec2( 0.5 ) ) * BOUNDS - vec2( mousePos.x, - mousePos.y ) ) * PI / mouseSize, 0.0, PI );',
      '  heightmapValue.x += cos( mousePhase ) + 1.0;',
      '  gl_FragColor = heightmapValue;',
      '}'
    ].join('\n');

    var smoothFragmentShader = [
      'uniform sampler2D texture;',
      'void main() {',
        'vec2 cellSize = 1.0 / resolution.xy;',
        'vec2 uv = gl_FragCoord.xy * cellSize;',
        'vec4 textureValue = texture2D( texture, uv );',
        'textureValue += texture2D( texture, uv + vec2( 0.0, cellSize.y ) );',
        'textureValue += texture2D( texture, uv + vec2( 0.0, - cellSize.y ) );',
        'textureValue += texture2D( texture, uv + vec2( cellSize.x, 0.0 ) );',
        'textureValue += texture2D( texture, uv + vec2( - cellSize.x, 0.0 ) );',
        'textureValue /= 5.0;',
        'gl_FragColor = textureValue;',
      '}'
    ].join('\n');

    var waterVertexShader = [
      'uniform sampler2D texture;',
      '#define PHONG',
      'varying vec3 vViewPosition;',
      '#ifndef FLAT_SHADED',
        'varying vec3 vNormal;',
      '#endif',
      '#include <common>',
      '#include <uv_pars_vertex>',
      '#include <uv2_pars_vertex>',
      '#include <displacementmap_pars_vertex>',
      '#include <envmap_pars_vertex>',
      '#include <color_pars_vertex>',
      '#include <morphtarget_pars_vertex>',
      '#include <skinning_pars_vertex>',
      '#include <shadowmap_pars_vertex>',
      '#include <logdepthbuf_pars_vertex>',
      '#include <clipping_planes_pars_vertex>',
      'void main() {',
        'vec2 cellSize = vec2( 1.0 / WIDTH, 1.0 / WIDTH );',
        '#include <uv_vertex>',
        '#include <uv2_vertex>',
        '#include <color_vertex>',
        'vec3 objectNormal = vec3(',
          '( texture2D( heightmap, uv + vec2( - cellSize.x, 0 ) ).x - texture2D( heightmap, uv + vec2( cellSize.x, 0 ) ).x ) * WIDTH / BOUNDS,',
          '( texture2D( heightmap, uv + vec2( 0, - cellSize.y ) ).x - texture2D( heightmap, uv + vec2( 0, cellSize.y ) ).x ) * WIDTH / BOUNDS,',
          '1.0 );',
        '#include <morphnormal_vertex>',
        '#include <skinbase_vertex>',
        '#include <skinnormal_vertex>',
        '#include <defaultnormal_vertex>',
        '#ifndef FLAT_SHADED',
          'vNormal = normalize( transformedNormal );',
        '#endif',
        'float heightValue = texture2D( heightmap, uv ).x;',
        'vec3 transformed = vec3( position.x, position.y, heightValue );',
        '#include <displacementmap_vertex>',
        '#include <morphtarget_vertex>',
        '#include <skinning_vertex>',
        '#include <project_vertex>',
        '#include <logdepthbuf_vertex>',
        '#include <clipping_planes_vertex>',
        'vViewPosition = - mvPosition.xyz;',
        '#include <worldpos_vertex>',
        '#include <envmap_vertex>',
        '#include <shadowmap_vertex>',
      '}'
    ].join('\n');

    this.heightmapVariable = heightmapVariable;
    this.model = waterMesh;
    this.mouseMoved = mouseMoved;
    this.gpuCompute = gpuCompute;
    this.waterUniforms = waterUniforms;
    el.setObject3D('water-mesh', waterMesh);
    el.setObject3D('mesh-ray', meshRay);
  }
});
