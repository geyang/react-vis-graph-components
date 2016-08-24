/**
 * A higher-level component that layouts a component
 * with respect to its parent block.
 */
import React, {PropTypes} from 'react';

const {oneOf, any} = PropTypes;

const propTypes = {
  component: any.isRequired,
  alignHorizontal: oneOf(['left', 'right', 'center']),
  alignVertical: oneOf(['top', 'bottom', 'middle'])
};

const defaultProps = {
  alignHorizontal: 'right',
  alignVertical: 'bottom',
  margin: 0
};

// todo: add anchor logic prop to allow passing-in of custom layout function.
export default function Text({
  children,
  component: Component,
  anchorX,
  anchorY,
  anchorWidth,
  anchorHeight,
  alignHorizontal,
  alignVertical,
  margin,
  ..._props
}) {
  let ax = anchorX;
  let ay = anchorY;
  if (alignHorizontal === 'left') {
    ax = anchorX - margin;
  } else if (alignHorizontal === 'right') {
    ax = anchorX + anchorWidth + margin;
  } else if (alignHorizontal === 'center') {
    ax = anchorX + anchorWidth / 2;
  }

  if (alignVertical === 'top') {
    ay = anchorY - margin;
  } else if (alignVertical === 'bottom') {
    ay = anchorY + anchorHeight + margin;
  } else if (alignVertical === 'middle') {
    ay = anchorY + anchorHeight / 2;
  }

  const props = {
    ax,
    ay,
    ..._props
  };

  return <Component {...props}>{children}</Component>;
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
