import 'aframe';
import './components/animation-mixer';
import 'aframe-animation-component';
// import 'aframe-rain';
import 'aframe-proxy-controls';
import extras from 'aframe-extras';
import physics from 'aframe-physics-system';
import SPE from 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Ground from './components/Ground';
import Text from './components/Text';
import Sky from './components/Sky';
import Boxes from './components/Boxes';
import EntitesWithPosition from './components/EntitesWithPosition';

physics.registerAll();
extras.registerAll();

let rendererGlobal;

AFRAME.registerComponent('wireframe-material', {
  dependencies: ['material'],
  init: function () {
    this.el.components.material.material.wireframe = true;
  }
});

AFRAME.registerComponent('nice-sound-loop', {
  init: function () {
    const el = this.el;
    const droneTrack = document.getElementById("droneTrack");
    const rainTrack = document.getElementById("rainTrack");
    droneTrack.volume = 0.2;

    droneTrack.addEventListener('timeupdate', function(){
      const buffer = 1;
      if (this.currentTime > this.duration - buffer) {
        this.currentTime = 1
        this.play();
      }
    }, false);

    rainTrack.addEventListener('timeupdate', function(){
      const buffer = .88;
      if (this.currentTime > this.duration - buffer) {
        this.currentTime = .88
        this.play();
      }
    }, false);
  }
});

class VRScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene
        fog="type: linear; color: #5EC8F6; far: 100; near: 0"
        animation__fog="property: fog.color; dir: alternate; to: #FFE516; dur: 20000; loop: true;"
        animation__fogfar="property: fog.far; dir: alternate; to: 150; dur: 20000; loop: true;"
        nice-sound-loop=""
        proxy-controls="enabled: true; debug: true;">
        <a-assets>
          <a-asset-item id="tree_tall" src="./js/models/tree_tall.json" />
        </a-assets>

        <EntitesWithPosition />
        <Camera>
          <a-cursor
            raycaster="objects: .clickable"
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150" />
        </Camera>

        <audio id="droneTrack" src="https://s3-eu-west-1.amazonaws.com/projectsuploads/sounds/99+Broken+Lightbulbs.wav" />
        <audio id="rainTrack" src="https://s3-eu-west-1.amazonaws.com/projectsuploads/sounds/rain-06.mp3" />

        <Sky />

        <Entity light={{type: 'ambient', color: '#CB44C6'}}/>
        <Entity light="type: directional; color: #ffffff; intensity: 0.6" position="0 20 0" />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
