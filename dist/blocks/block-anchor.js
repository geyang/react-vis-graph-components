'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERTICAL_ALIGNS = exports.HORIZONTAL_ALIGNS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * A higher-level component that layouts a component
                                                                                                                                                                                                                              * with respect to its parent block.
                                                                                                                                                                                                                              */


var oneOf = _react.PropTypes.oneOf;
var any = _react.PropTypes.any;
var HORIZONTAL_ALIGNS = exports.HORIZONTAL_ALIGNS = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
};

var VERTICAL_ALIGNS = exports.VERTICAL_ALIGNS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  MIDDLE: 'middle'
};

var propTypes = {
  component: any.isRequired,
  alignHorizontal: oneOf(Object.values(HORIZONTAL_ALIGNS)),
  alignVertical: oneOf(Object.values(VERTICAL_ALIGNS))
};

var defaultProps = {
  alignHorizontal: HORIZONTAL_ALIGNS.RIGHT,
  alignVertical: VERTICAL_ALIGNS.MIDDLE,
  margin: 0
};

// todo: add anchor logic prop to allow passing-in of custom layout function.
function BlockAnchor(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var anchorX = _ref.anchorX;
  var anchorY = _ref.anchorY;
  var anchorWidth = _ref.anchorWidth;
  var anchorHeight = _ref.anchorHeight;
  var alignHorizontal = _ref.alignHorizontal;
  var alignVertical = _ref.alignVertical;
  var margin = _ref.margin;

  var restProps = _objectWithoutProperties(_ref, ['children', 'component', 'anchorX', 'anchorY', 'anchorWidth', 'anchorHeight', 'alignHorizontal', 'alignVertical', 'margin']);

  var ax = anchorX;
  var ay = anchorY;
  switch (alignHorizontal) {
    case HORIZONTAL_ALIGNS.LEFT:
      ax = anchorX - margin;
      break;
    case HORIZONTAL_ALIGNS.RIGHT:
      ax = anchorX + anchorWidth + margin;
      break;
    case HORIZONTAL_ALIGNS.CENTER:
      ax = anchorX + anchorWidth / 2;
      break;
  }

  switch (alignVertical) {
    case VERTICAL_ALIGNS.TOP:
      ay = anchorY - margin;
      break;
    case VERTICAL_ALIGNS.BOTTOM:
      ay = anchorY + anchorHeight + margin;
      break;
    case VERTICAL_ALIGNS.MIDDLE:
      ay = anchorY + anchorHeight / 2;
      break;
  }

  var props = _extends({
    ax: ax,
    ay: ay
  }, restProps);

  return _react2.default.createElement(
    Component,
    props,
    children
  );
}

BlockAnchor.propTypes = propTypes;
BlockAnchor.defaultProps = defaultProps;
var _default = BlockAnchor;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(any, 'any', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(HORIZONTAL_ALIGNS, 'HORIZONTAL_ALIGNS', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(VERTICAL_ALIGNS, 'VERTICAL_ALIGNS', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(BlockAnchor, 'BlockAnchor', 'src/blocks/block-anchor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/blocks/block-anchor.js');
})();

;