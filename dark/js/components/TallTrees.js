AFRAME.registerComponent('generate-trees', {
  init: function () {
    for (let i = -3; i < 3; i++) {
      for (let j = -3; j < 3; j++) {
        const tree = document.createElement('a-entity');
        tree.setAttribute("json-model", "src: #tree_tall");
        tree.setAttribute("position", { x: i * 15, y: -0.4, z: j * 15 });
        tree.setAttribute("scale", { x: 1 + Math.random(), y: Math.random() + 0.6, z: 1 + Math.random() });
        tree.setAttribute("static-body", "");
        this.el.appendChild(tree);
      }
    }
  }
});

AFRAME.registerComponent('generate-swamp', {
  init: function () {
    for (let i = -2; i < 2; i++) {
      for (let j = -2; j < 2; j++) {
        const swamp = document.createElement('a-entity');
        swamp.setAttribute("ocean", "width:60; depth:60; density: 60;");
        swamp.setAttribute("position", { x: i * 60, y: 0, z: j * 60 });
        swamp.setAttribute("rotation", "-90 0 0");
        this.el.appendChild(swamp);
      }
    }
  }
});


import '../lib/EffectComposer';

import '../lib/RenderPass';
import '../lib/ShaderPass';
import '../lib/DotScreenPass';
import '../lib/BloomPass';

import '../lib/shaders/CopyShader';
import '../lib/shaders/ConvolutionShader';
import '../lib/shaders/DotScreenShader';
import '../lib/shaders/ShaderExtras';

/**
 * Configures a THREE.EffectComposer on the current A-Frame scene.
 */
// AFRAME.registerSystem('effects', {
//   /**
//    * Configure composer with a few arbitrary passes.
//    */
//   init: function () {
//     const sceneEl = this.sceneEl;

//     if (!sceneEl.hasLoaded) {
//       sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
//       return;
//     }

//     const scene = sceneEl.object3D;
//     const renderer = sceneEl.renderer;
//     const camera = sceneEl.camera;
//     const SCREEN_WIDTH = window.innerWidth;
//     const SCREEN_HEIGHT = window.innerHeight;

//     // Glow scene
//     const glowscene = new THREE.Scene();
//     glowscene.add( new THREE.AmbientLight( 0xffffff ) );

//     const geometry = new THREE.SphereGeometry(0.3, 10, 10);
//     // const zmesh = new THREE.Mesh( geometry, new THREE.MultiMaterial() );
//     // zmesh.position.set( 0, 2, 0 );
//     // zmesh.scale.set( 3, 3, 3 );
//     // zmesh.overdraw = true;
//     // scene.add( zmesh );

//     // const gtex = new THREE.TextureLoader();
//     // let gmat;
//     // gtex.load(
//     //   '../../assets/particle.png',
//     //   function ( texture ) {
//     //   // do something with the texture
//     //     gmat = new THREE.MeshBasicMaterial( {
//     //       map: texture,
//     //       color: 0xBEE1F9,
//     //     } );
//     //     // gmat.color.setHex = 0xBEE1F9;
//     //   },
//     //   // Function called when download progresses
//     //   function ( xhr ) {
//     //     console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//     //   },
//     //   // Function called when download errors
//     //   function ( xhr ) {
//     //     console.log( 'An error happened' );
//     //   }
//     // )
//     // gtex.needsUpdate = true;
//     // const gmat = new THREE.MeshBasicMaterial( { map: gtex } );
//     // const geometryClone = THREE.GeometryUtils.clone( geometry );
//     // setTimeout(function() {console.log(gmat)}, 1000);
//     // let gmesh;
//     // for (let i = -5; i < 5; i++) {
//     //   for (let j = -5; j < 5; j++) {
//     //     const gmesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: 0xBEE1F9 } ));
//     //     gmesh.position.set( i * 10, 10 + Math.random(), j * 10 );
//     //     glowscene.add(gmesh);
//     //   }
//     // }
//     const gmesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: 0xBEE1F9 } ));
//     gmesh.position.set( 0, 10, -10 );
//     // glowscene.add(gmesh);
//     // gmesh.position = zmesh.position;
//     // gmesh.scale = zmesh.scale;
//     // gmesh.overdraw = true;
//     // glowscene.add(gmesh);

//     // Glow composer
//     const renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBufer: false };
//     const renderTargetGlow = new THREE.WebGLRenderTarget( SCREEN_WIDTH, SCREEN_HEIGHT, renderTargetParameters );

//     var effectFXAA = new THREE.ShaderPass( THREE.ShaderExtras[ "fxaa" ] );
//     effectFXAA.uniforms[ 'resolution' ].value.set( 1 / SCREEN_WIDTH, 1 / SCREEN_HEIGHT );

//     const hblur = new THREE.ShaderPass( THREE.ShaderExtras[ "horizontalBlur" ] );
//     const vblur = new THREE.ShaderPass( THREE.ShaderExtras[ "verticalBlur" ] );

//     const bluriness = 3;

//     hblur.uniforms[ "h" ].value = bluriness / SCREEN_WIDTH;
//     vblur.uniforms[ "v" ].value = bluriness / SCREEN_HEIGHT;

//     const renderModelGlow = new THREE.RenderPass( glowscene, camera );

//     const glowcomposer = new THREE.EffectComposer( renderer, renderTargetGlow );

//     glowcomposer.addPass( renderModelGlow );
//     glowcomposer.addPass( hblur );
//     glowcomposer.addPass( vblur );

//     // Final composer
//     finalshader.uniforms[ 'tGlow' ].value = glowcomposer.renderTarget2;
//     // console.log(glowcomposer.renderTarget2)

//     const renderModel = new THREE.RenderPass( scene, camera );
//     const finalPass = new THREE.ShaderPass( finalshader );
//     finalPass.needsSwap = true;
//     finalPass.renderToScreen = true;
//     const renderTarget = new THREE.WebGLRenderTarget( SCREEN_WIDTH, SCREEN_HEIGHT, renderTargetParameters );
//     const composer = new THREE.EffectComposer( renderer, renderTarget );
//     composer.addPass( renderModel );
//     composer.addPass( effectFXAA );
//     composer.addPass( finalPass );

//     this.composer = composer;
//     this.glowcomposer = glowcomposer;
//     this.t = 0;
//     this.dt = 0;
//     // this.gmesh = gmesh;

//     this.bind();
//   },

//   /**
//    * Record the timestamp for the current frame.
//    * @param {number} t
//    * @param {number} dt
//    */
//   tick: function (t, dt) {
//     this.t = t;
//     this.dt = dt;
//     // this.gmesh.position.set( Math.cos(t), Math.cos(t), Math.cos(t) );
//   },

//   /**
//    * Binds the EffectComposer to the A-Frame render loop.
//    * (This is the hacky bit.)
//    */
//   bind: function () {
//     const renderer = this.sceneEl.renderer;
//     const render = renderer.render;
//     const system = this;
//     let isDigest = false;

//     renderer.render = function () {
//       if (isDigest) {
//         render.apply(this, arguments);
//       } else {
//         isDigest = true;
//         system.composer.render(system.dt);
//         // system.glowcomposer.render(system.dt);
//         isDigest = false;
//       }
//     };
//   }
// });


const finalshader = {
  uniforms: {
    tDiffuse: { type: "t", value: 0, texture: null },
    tGlow: { type: "t", value: 1, texture: null }
  },
  vertexShader: [
    "varying vec2 vUv;",
    "void main() {",
      "vUv = vec2( uv.x, uv.y );",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}"
  ].join("\n"),
  fragmentShader: [
    "uniform sampler2D tDiffuse;",
    "uniform sampler2D tGlow;",
    "varying vec2 vUv;",
    "void main() {",
      "vec4 texel = texture2D( tDiffuse, vUv );",
      "vec4 glow = texture2D( tGlow, vUv );",
      "gl_FragColor = texel + vec4(0.5, 0.75, 1.0, 1.0) * glow * 2.0;",
    "}"
  ].join("\n")
};
