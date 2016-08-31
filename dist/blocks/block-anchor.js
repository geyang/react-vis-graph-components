'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * A higher-level component that layouts a component
                                                                                                                                                                                                                              * with respect to its parent block.
                                                                                                                                                                                                                              */


var oneOf = _react.PropTypes.oneOf;
var any = _react.PropTypes.any;


var propTypes = {
  component: any.isRequired,
  alignHorizontal: oneOf(['left', 'right', 'center']),
  alignVertical: oneOf(['top', 'bottom', 'middle'])
};

var defaultProps = {
  alignHorizontal: 'right',
  alignVertical: 'bottom',
  margin: 0
};

// todo: add anchor logic prop to allow passing-in of custom layout function.
function Text(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var anchorX = _ref.anchorX;
  var anchorY = _ref.anchorY;
  var anchorWidth = _ref.anchorWidth;
  var anchorHeight = _ref.anchorHeight;
  var alignHorizontal = _ref.alignHorizontal;
  var alignVertical = _ref.alignVertical;
  var margin = _ref.margin;

  var _props = _objectWithoutProperties(_ref, ['children', 'component', 'anchorX', 'anchorY', 'anchorWidth', 'anchorHeight', 'alignHorizontal', 'alignVertical', 'margin']);

  var ax = anchorX;
  var ay = anchorY;
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

  var props = _extends({
    ax: ax,
    ay: ay
  }, _props);

  return _react2.default.createElement(
    Component,
    props,
    children
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(any, 'any', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/blocks/block-anchor.js');
})();

;