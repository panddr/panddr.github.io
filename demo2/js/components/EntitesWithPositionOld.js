import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity className="shit">
    <Entity
      scale="1.01 1.01 1.01"
      dynamic-body=""
      wireframe-material=""
      position="10 2 -10"
      geometry={{primitive: 'box', width: '4', height: '4', depth: '4'}} />
    <Entity
      static-body=""
      scale="3 3 3"
      position="30 0.1 -15"
      id="mountain"
      json-model="src: url(./js/models/test.json);"/>
    <Entity
      dynamic-body="shape:box;"
      scale="0.002 0.002 0.002"
      position="-10 10.1 -15"
      animation__position="property: position; dir: alternate; to: -50 10 0; dur: 10000; loop: true;"
      animation-mixer=""
      json-model="src: url(./js/models/animation2.json);"/>
    <Entity
      dynamic-body="shape:box;"
      scale="0.003 0.003 0.003"
      position="0 10.1 -15"
      animation__position="property: position; dir: alternate; to: -50 10 0; dur: 10000; loop: true;"
      animation-mixer=""
      json-model="src: url(./js/models/horse.json);"/>
    <Entity
      scale="3 3 3"
      position="30 0.1 -15"
      json-model="src: url(./js/models/mountain_wireframe.json);"/>
    <Entity
      static-body=""
      scale="3 9 3"
      position="40 0.1 5"
      json-model="src: url(./js/models/mountain.json);"/>
    <Entity
      scale="3 9 3"
      position="40 0.1 5"
      json-model="src: url(./js/models/mountain_wireframe.json);"/>
    <Entity
      static-body=""
      scale="2 13 2"
      position="10 0.1 15"
      json-model="src: url(./js/models/mountain.json);"/>
    <Entity static-body="shape: box;" scale="3 3 3" position="20 1.4 -15" json-model="src: url(./js/models/camel1.json);"/>
    <Entity static-body="shape: box;" position="55 0.1 0" json-model="src: url(./js/models/nature.json);"/>
    <Entity static-body="" position="15 0.1 10" json-model="src: url(./js/models/tree2.json);"/>
    <Entity static-body="shape: box;" position="36 0.1 -10" json-model="src: url(./js/models/nature.json);"/>
    <Entity static-body="" position="38 0.1 -11" json-model="src: url(./js/models/tree2.json);"/>
    <Entity static-body="shape: box;" position="16 0.1 -4" json-model="src: url(./js/models/nature.json);"/>
  </Entity>
);
