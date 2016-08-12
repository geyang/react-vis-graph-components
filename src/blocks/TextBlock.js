/**
 * Created by ge on 8/11/16.
 */
import React, {PropTypes} from 'react';
import Rectangle from './Rectangle';

const {arrayOf, oneOf} = PropTypes;
const propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

export default function TextBlock({
  text,
  type,
  x,
  y,
  width,
  height,
  ..._props
}) {
  const blockProps = {
    x, y, width, height, ..._props
  };
  const textProps = {
    x, y: (y + 30), width, height
  };
  return (
    <g>
      <Rectangle {...blockProps}/>
      <text {...textProps}>{text}</text>
    </g>
  );
}

TextBlock.propTypes = propTypes;
