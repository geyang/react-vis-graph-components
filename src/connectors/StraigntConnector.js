import React, {PropTypes} from 'react';
import {LINK} from '../node-types';

const {arrayOf, oneOf} = PropTypes;
const propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

const styleProps = {
  fill: 'transparent'
};

export default function StraightConnector({
  from,
  to,
  x1,
  y1,
  x2,
  y2,
  paddingStart,
  paddingEnd,
  markerStartId,
  markerMidId,
  markerEndId,
  stroke = "black",
  strokeWidth,
  ..._props
}) {
  const wayPoints = [[x1, y1], [x2, y2]];
  const d = 'M ' + wayPoints.map(pt => pt.join(', ')).join(' ');

  const markerStart = markerStartId ? `url(#${markerStartId})` : '';
  const markerMid = markerMidId ? `url(#${markerMidId})` : '';
  const markerEnd = markerEndId ? `url(#${markerEndId})` : '';

  const props = {
    ...styleProps,
    d, stroke, strokeWidth, markerStart, markerMid, markerEnd,
    ..._props
  };
  return (
    <path {...props}/>
  );
}

StraightConnector.graphNodeType = LINK;
StraightConnector.propTypes = propTypes;
