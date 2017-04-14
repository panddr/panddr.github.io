import {Entity} from 'aframe-react';
import React from 'react';
import './TallTrees';
import './Water';

AFRAME.registerComponent('glow-material', {
  dependencies: ['material'],
  init: function () {
    let camera;
    this.mesh = this.el.getObject3D('mesh');
    const that = this;
    const bluriness = 300;
    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;
    this.el.sceneEl.addEventListener('camera-set-active', function (evt) {
      camera = evt.detail.cameraEl;
      const customMaterial = new THREE.ShaderMaterial(
      {
        uniforms:
        {
          "c":   { type: "f", value: 0 },
          "p":   { type: "f", value: 6 },
          glowColor: { type: "c", value: new THREE.Color(0x4abfff) },
          viewVector: { type: "v3", value: camera.object3D.position }
        },
        vertexShader:   document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      that.mesh.material = customMaterial;
      that.camera = camera;
    });
    // const uniforms[ "h" ].value = bluriness / SCREEN_WIDTH;
    // vblur.uniforms[ "v" ].value = bluriness / SCREEN_HEIGHT;
    // const uniforms = { h:  { value: bluriness / SCREEN_WIDTH }, v:  { value: bluriness / SCREEN_HEIGHT } };

    // this.material = new THREE.ShaderMaterial( {
    //   uniforms: uniforms,
    //   vertexShader: finalshader.vertexShader,
    //   fragmentShader: finalshader.fragmentShader,
    //   side: THREE.DoubleSide
    // } );

    // const geometry = new THREE.SphereGeometry(0.3, 10, 10);


    // const gtex = new THREE.TextureLoader();
    // let material;
    // gtex.load(
    //   '../../assets/particle.png',
    //   function ( texture ) {
    //   // do something with the texture
    //     material = new THREE.MeshBasicMaterial( {
    //       map: texture,
    //       transparent: true,
    //       color: 0xffffff,
    //     } );

    //     // material.color.setHex = 0xBEE1F9;
    //     mesh.material = material;
    //   },
    //   // Function called when download progresses
    //   function ( xhr ) {
    //     console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    //   },
    //   // Function called when download errors
    //   function ( xhr ) {
    //     console.log( 'An error happened' );
    //   }
    // )

    // this.material = new THREE.MeshBasicMaterial( { map: gtex } );
    // const gmesh = new THREE.Mesh(geometry, material);

    // mesh.material = material;
  },
  tick: function() {
    this.mesh.material.uniforms.viewVector.value = new THREE.Vector3().subVectors( this.camera.object3D.position, this.mesh.position );
  }
});

export default props => (
  <Entity>
    <Entity
      geometry="primitive: sphere; radius: 0.2;"
      position="3 10 4"
      animation__position="property: position; dir: alternate; to: 5 12 6; dur: 10000; loop: true;"
      glow-material="" />
    <Entity
      className="clickable"
      static-body="shape:box;"
      geometry={{primitive: 'box', width: '2', height: '14', depth: '2'}}
      position="0 10 0"/>
    <Entity
      className="clickable"
      static-body=""
      water=""
      scale="1 1 1"
      position="10 4 0" />
  </Entity>
);







const finalshader = {
  vertexShader: [
    "uniform vec3 viewVector;",
    "uniform float c;",
    "uniform float p;",
    "uniform float intensity;",
    "void main() {",
      "vec3 vNormal = normalize( normalMatrix * normal );",
      "vec3 vNormel = normalize( normalMatrix * viewVector );",
      "intensity = pow( c - dot(vNormal, vNormel), p );",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}"
  ],
  fragmentShader: [
    "uniform vec3 glowColor;",
    "varying float intensity;",
    "void main() {",
      "vec3 glow = glowColor * intensity;",
      "gl_FragColor = vec4( glow, 1.0 )",
    "}"
  ]
};

// const finalshader = {
//   uniforms: {
//     tDiffuse: { type: "t", value: 0, texture: null },
//     tGlow: { type: "t", value: 1, texture: null }
//   },
//   vertexShader: [
//     "varying vec2 vUv;",
//     "void main() {",
//       "vUv = vec2( uv.x, uv.y );",
//       "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
//     "}"
//   ].join("\n"),
//   fragmentShader: [
//     "uniform sampler2D tDiffuse;",
//     "uniform sampler2D tGlow;",
//     "varying vec2 vUv;",
//     "void main() {",
//       "vec4 texel = texture2D( tDiffuse, vUv );",
//       "vec4 glow = texture2D( tGlow, vUv );",
//       "gl_FragColor = texel + vec4(0.5, 0.75, 1.0, 1.0) * glow * 2.0;",
//     "}"
//   ].join("\n")
// };
