import {Entity} from 'aframe-react';
import React from 'react';

AFRAME.registerComponent('ground', {
  init: function () {
    var objectLoader;
    var object3D = this.el.object3D;
    // var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/ground.json';
    var MODEL_URL = './js/models/terrain.json';
    if (this.objectLoader) { return; }
    objectLoader = this.objectLoader = new THREE.ObjectLoader();
    objectLoader.crossOrigin = '';
    objectLoader.load(MODEL_URL, function (obj) {
      obj.children.forEach(function (value) {
        value.receiveShadow = true;
        value.material.shading = THREE.FlatShading;
      });
      object3D.add(obj);
    });
  }
});

AFRAME.registerComponent('ground-wireframe', {
  init: function () {
    var objectLoader;
    var object3D = this.el.object3D;
    // var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/ground.json';
    var MODEL_URL = './js/models/terrain.json';
    if (this.objectLoader) { return; }
    objectLoader = this.objectLoader = new THREE.ObjectLoader();
    objectLoader.crossOrigin = '';
    objectLoader.load(MODEL_URL, function (obj) {
      obj.children.forEach(function (value) {
        value.receiveShadow = true;
        value.material.wireframe = true;
      });
      object3D.add(obj);
    });
  }
});

AFRAME.registerComponent('mountain-plane', {
  init: function () {
    const object3D = this.el.object3D;

    const numSegments = 100;
    const geometry = new THREE.PlaneGeometry(200, 200, numSegments, numSegments);
    const material = new THREE.MeshLambertMaterial({
        wireframe: true,
        color: 0xcccccc
    });
    this.plane = new THREE.Mesh(geometry, material);
    this.plane.name = 'Terrain';
    for (let i = 0; i < this.plane.geometry.vertices.length; i++) {
      this.plane.geometry.vertices[i].x = this.plane.geometry.vertices[i].x + Math.random()*0.2;
      this.plane.geometry.vertices[i].y = this.plane.geometry.vertices[i].y + Math.random();
      this.plane.geometry.vertices[i].z = Math.random()*0.5;
    }

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    object3D.add(this.plane);
  }
});

AFRAME.registerComponent('mountain-plane-black', {
  init: function () {
    var objectLoader;
    var object3D = this.el.object3D;

    var numSegments = 100;

    var geometry = new THREE.PlaneGeometry(200, 200, numSegments, numSegments);

    var material = new THREE.MeshLambertMaterial({
        wireframe: false,
        color: 0x000000,
        emissive: 0x111111
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.name = 'Terrain';
    for (var i = 0; i < plane.geometry.vertices.length; i++) {
      plane.geometry.vertices[i].x = plane.geometry.vertices[i].x + Math.random()*0.4;
      plane.geometry.vertices[i].y = plane.geometry.vertices[i].y + Math.random()*2;
      plane.geometry.vertices[i].z = Math.random()*0.4;
    }

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    object3D.add(plane);
  }
});

export default props => (
  <Entity>
    <Entity
      geometry={{primitive: 'box', height: '600', width: '600', depth: '10'}}
      static-body=""
      material="color: #000"
      position="0 -5.5 0"
      rotation="-90 0 0"/>
    <Entity
      mountain-plane-black=""
      position="0 0.1 0"
      rotation="-90 0 0"/>
  </Entity>
);
