import {Entity} from 'aframe-react';
import React from 'react';

let meshes = [];

AFRAME.registerComponent('set-position', {
  schema: {
    positions: {type: 'array'},
    quaternions: {type: 'array'},
    components: {default: ['wireframe-material', 'dynamic-body']},
  },
  init: function () {
    const container = document.querySelector('.container');
    function getRandCoord () {
      const coord = Math.random() * 60;
      return Math.random() < .5 ? coord + 5 : coord * -1 - 5;
    }
    for(let i=0; i<4; i++) {
      const cube = document.createElement('a-entity');
      cube.setAttribute('geometry', {
        primitive: 'box',
        height: 1,
        width: 1,
      });
      cube.setAttribute(this.data.components[0], '');
      cube.setAttribute(this.data.components[1], 'mass: 70');
      cube.setAttribute('position', {
        x: Math.random()+20,
        y: 2.5*i+0.5,
        z: Math.random()-15.5,
      });
      container.appendChild(cube);
      meshes.push(cube);
    }
  },
});

export default props => {
  return (
    <Entity
      className="container"
      set-position={{positions:props.positions, quaternions:props.quaternions}}>
    </Entity>
  );
};
