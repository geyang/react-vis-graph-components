/**
 * Created by ge on 8/11/16.
 */
import React, {PropTypes} from 'react';

const {arrayOf, oneOf} = PropTypes;
const propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

export default function Rectangle({
  name,
  x,
  y,
  width = '30',
  height = '20',
  rx = '7',
  ry = '7',
  fill = 'transparent',
  stroke = 'black',
  strokeWidth = '10',
  ..._props
}) {

  const props = {
    name, x, y, width, height, rx, ry, stroke, strokeWidth, fill,
    ..._props
  };
  return (
    <rect {...props}/>
  );
}

Rectangle.propTypes = propTypes;
