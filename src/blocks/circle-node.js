/** Created on 8/14/16. */
import React, {cloneElement, Children} from 'react';
import NODE_TYPES from '../node-types';

const propTypes = {};

// todo: implement container block API as a higher level component
export default function CircleNode({
  name,
  cx,
  cy,
  r,
  fill = 'transparent',
  stroke = 'rgba(35, 170, 255, 0.5)',
  strokeWidth = 3,
  ..._props
}) {
  const props = {
    name,
    cx,
    cy,
    r: r - strokeWidth,
    fill,
    stroke,
    strokeWidth,
    ..._props
  };
  return <circle {...props}/>;
}

CircleNode.graphNodeType = NODE_TYPES.NODE;
CircleNode.propTypes = propTypes;

