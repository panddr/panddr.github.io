import 'aframe';
import 'aframe-animation-component';
// import 'aframe-text-component';
import extras from 'aframe-extras';
import physics from 'aframe-physics-system';
import SPE from 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Ground from './components/Ground';
import Boxes from './components/Boxes';

physics.registerAll();
extras.registerAll();

AFRAME.registerComponent('wireframe-material', {
  dependencies: ['material'],
  init: function () {
    this.el.components.material.material.wireframe = true;
  }
});

class VRScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene>
        <a-assets></a-assets>

        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
          >
          </a-cursor>
        </Camera>

        <Ground />
        <a-entity position="0 2.25 -15" particle-system="preset: snow"></a-entity>
        <Entity wireframe-material="" oceann="" rotation="-90 0 0" static-body=""/>
        <a-ocean width="250" depth="250" wireframe-material="" static-body="" amplitude="50" amplitudeVariance="10" density="35" speed="2"></a-ocean>
        <a-tube radius="2" path="0 0 0, -1 -1 -10, -3 -3 -20, 0 0 -30" static-body="" scale="2 2 2" wireframe-material="" position="10 5 0" />
        <Sky />
        <Boxes
          N='40'
          dt='1/60'/>

        <Entity light={{type: 'ambient', color: '#ffffff'}}/>
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
