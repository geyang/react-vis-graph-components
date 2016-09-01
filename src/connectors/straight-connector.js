import React, {PropTypes} from 'react';
import NODE_TYPES from '../node-types';

const STYLEP_ROPS = {
  fill: 'transparent'
};

const {number, string} = PropTypes;
const propTypes = {
  from: string,
  to: string,
  paddingStart: number,
  paddingEnd: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  markerStartId: string,
  markerMidId: string,
  markerEndId: string,
  stroke: string,
  strokeWidth: number,
};

function StraightConnector({
  from,
  to,
  paddingStart,
  paddingEnd,
  x1,
  y1,
  x2,
  y2,
  markerStartId,
  markerMidId,
  markerEndId,
  stroke = 'black',
  strokeWidth,
  ...restProps
}) {
  const d = `M ${x1},${y1} ${x2},${y2}`;

  const markerStart = markerStartId ? `url(#${markerStartId})` : '';
  const markerMid = markerMidId ? `url(#${markerMidId})` : '';
  const markerEnd = markerEndId ? `url(#${markerEndId})` : '';

  const props = {
    ...STYLEP_ROPS,
    d, stroke, strokeWidth, markerStart, markerMid, markerEnd,
    ...restProps
  };
  return (
    <path {...props}/>
  );
}

StraightConnector.graphNodeType = NODE_TYPES.LINK;
StraightConnector.propTypes = propTypes;
export default StraightConnector;
