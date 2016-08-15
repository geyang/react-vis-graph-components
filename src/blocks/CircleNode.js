/**
 * Created by ge on 8/14/16.
 */
import React, {PropTypes} from 'react';

// const {} = PropTypes;
const propTypes = {};

export default function CircleNode({
  name,
  nodeType,
  x,
  y,
  r,
  fill = 'transparent',
  stroke = 'rgba(35, 170, 255, 0.5)',
  strokeWidth = '3',
  children,
  ..._props
}) {
  const props = {
    name, cx: x, cy: y, r, fill, stroke, strokeWidth,
    ..._props
  };
  if (typeof children === 'undefined') {
    return (
      <circle {...props}/>
    );
  } else {
    return (
      <g>
        <circle {...props}/>
      </g>
    );
  }
}

CircleNode.propTypes = propTypes;

