import React, {PropTypes} from 'react';
import Connector from './Connector';
import getMidPoint from '../utils/getMidPoint';
import {bound2D} from '../utils/bound';

const {arrayOf, oneOf} = PropTypes;

const propTypes = {
  fromDirection: oneOf([0, 90, 180, 270]),
  toDirection: oneOf([0, 90, 180, 270]),
  points: arrayOf(oneOf(['square', 'cubic']))
};

export default function SquareConnector({
  from,
  fromDirection,
  to,
  toDirection,
  controlPoint,
  ..._props
}) {
  // routing logic

  if (!controlPoint) controlPoint = getMidPoint(from, to);
  else controlPoint = bound2D([from, to], controlPoint);

  const intersect1 =





  const wayPoints = [
    from,
    controlPoint,
    to
  ];
  return (
    <Connector wayPoints={wayPoints} {..._props}/>
  );
}

SquareConnector.propTypes = propTypes;
