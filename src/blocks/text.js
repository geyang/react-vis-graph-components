/**
 * Created on 8/23/16.
 */
import React, {PropTypes} from 'react';
import isDefined from '../utils/is-defined';

export default function Text({
  children,
  x,
  y,
  ax,
  ay,
  ..._props
}) {
  if (!isDefined(x) && isDefined(ax)) {
    x = ax;
  }

  if (!isDefined(y) && isDefined(ay)) {
    y = ay;
  }

  const props = {
    x,
    y,
    ..._props
  };

  return (
    <text {...props}>
      {children}
    </text>
  );
}
