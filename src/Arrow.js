import React, {PropTypes} from 'react';

const propTypes = {};

export default function Arrow({
  id,
  refX = 0.1,
  refY = 2,
  d = 'M0,0 V4 L4,2 Z',
  width: markerWidth = 5,
  height: markerHeight = 5,
  color: fill = 'black',
  orient = 'auto',
  ..._props
}) {
  const props = {
    id, refX, refY, markerWidth, markerHeight, orient
  };
  const pathProps = {
    fill, d, ..._props
  };
  return (
    <marker {...props}>
      <path {...pathProps}/>
    </marker>
  );
}

Arrow.propTypes = propTypes;
