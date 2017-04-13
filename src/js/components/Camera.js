import {Entity} from 'aframe-react';
import React from 'react';

AFRAME.registerComponent('detect-moving', {
  init: function () {
    const el = this.el;
  },
  tick: function () {
    const el = this.el;
    const entities = this.el.sceneEl.object3D.children[0].children;

    // console.log(entities)

    // if (el.object3D.position.z > -10) {
    //   el.setAttribute("animation__fog", "property: fog.color; dir: alternate; to: #fff; dur: 1000; loop: true;");
    // }

    for (var i = 0; i < entities.length; i++) {
      // console.log(Math.abs(this.el.object3D.position.z - entities[1].position.z))
      if (Math.abs(this.el.object3D.position.z - entities[i].position.z) > 60 || Math.abs(this.el.object3D.position.x - entities[i].position.x) > 60) {
        // console.log(entities[1])
        entities[i].el.setAttribute("visible", false);
      } else {
        entities[i].el.setAttribute("visible", true);
      }
    }
    // if (this.el.object3D.position.z < -20) {
      // const mountain = document.getElementById("mountain");
      // console.log(mountain.parentNode)
      // this.el.parentNode.removeChild(this.el);
    // }
    // document.addEventListener('keydown', function(event) {
    //   console.log(el.getAttribute('position'));
    // }, false);
  }
});

AFRAME.registerComponent('rain-with-camera', {
  init: function () {
    // const el = this.el;
    // el.setAttribute("visible", false);
    this.position = document.getElementById('camera').object3D.position;
  },
  tick: function () {
    this.el.setAttribute("position", { x: this.position.x, y: 0, z: this.position.z });
  }
});

export default props => (
  <Entity>
    <Entity
      id="player"
      camera="userHeight: 1.6"
      universal-controls=""
      id="camera"
      detect-moving=""
      position="0 25 0"
      kinematic-body="mass: 1"
      jump-ability="maxJumps: 1;
                    distance: 6;"
      {...props}>
    </Entity>
    <Entity
      className="not-clickable"
      rain-with-camera=""
      particle-system="preset: rain; opacity: 0.4; size: 2; particleCount: 5000; texture: ../../assets/raindrop.png;" />
  </Entity>
);
