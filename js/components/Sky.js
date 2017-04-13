import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 200}}
    material={{color: '#5EC8F6'}}
    scale="1 1 -1"/>
);
