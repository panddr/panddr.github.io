import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 1000}}
    material={{color: '#000000'}}
    scale="1 1 -1"/>
);
