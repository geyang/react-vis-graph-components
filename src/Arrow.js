import React, {PropTypes} from 'react';

const propTypes = {};

export default function Arrow({
  id,
  refX = 0,
  refY = 0,
  width: markerWidth = 5,
  height: markerHeight = 5,
  color: fill = 'transparent',
  orient = 'auto',
  ..._props
}) {
  const props = {
    id, refX, refY, markerWidth, markerHeight, fill, orient
  };
  const pathProps = {
    fill, ..._props
  };
  return (
    <marker {...props}>
      <path d="M 0 0 L 10 5 L 0 10 z" {...pathProps}/>
    </marker>
  );
}

Arrow.propTypes = propTypes;
