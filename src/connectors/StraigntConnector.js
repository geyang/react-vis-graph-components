import React, {PropTypes} from 'react';

const {arrayOf, oneOf} = PropTypes;

const propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

const styleProps = {
  fill: 'transparent'
};

export default function StraightConnector({
  wayPoints,
  width: strokeWidth = 2,
  color: stroke = 'red',
  markerStartId = '',
  markerMidId = '',
  markerEndId = '',
  bendType,
  bendRadius,
  ..._props
}) {
  const d = 'M ' + wayPoints.map(pt => pt.join(', ')).join(' ');

  const markerStart = markerStartId ? `url(#${markerStartId})` : '';
  const markerMid = markerMidId ? `url(#${markerMidId})` : '';
  const markerEnd = markerEndId ? `url(#${markerEndId})` : '';

  if (bendType === 'square') {
  }

  const props = {
    ...styleProps,
    d, stroke, strokeWidth, markerStart, markerMid, markerEnd,
    ..._props
  };
  return (
    <path {...props}/>
  );
}

Connector.propTypes = propTypes;
