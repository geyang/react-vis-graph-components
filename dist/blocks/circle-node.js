'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var string = _react.PropTypes.string;
var number = _react.PropTypes.number;

var propTypes = {
  /** name of the node, used for links to look the node up. */
  name: string,
  /** x coordinate of the center of node */
  cx: number,
  /** y coordinate of the center of node */
  cy: number,
  /** radius of node */
  r: number,
  /** node background color */
  fill: string,
  /** border color */
  stroke: string,
  /** border width */
  strokeWidth: number
};

var defaultProps = {
  fill: 'transparent',
  stroke: 'rgba(35, 170, 255, 0.5)',
  strokeWidth: 3
};

// todo: implement container block API as a higher level component
function CircleNode(_ref) {
  var name = _ref.name;
  var cx = _ref.cx;
  var cy = _ref.cy;
  var r = _ref.r;
  var fill = _ref.fill;
  var stroke = _ref.stroke;
  var strokeWidth = _ref.strokeWidth;

  var restProps = _objectWithoutProperties(_ref, ['name', 'cx', 'cy', 'r', 'fill', 'stroke', 'strokeWidth']);

  var props = _extends({
    name: name,
    cx: cx,
    cy: cy,
    r: r - strokeWidth,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth
  }, restProps);
  return _react2.default.createElement('circle', props);
}

CircleNode.graphNodeType = _nodeTypes2.default.NODE;
CircleNode.propTypes = propTypes;
CircleNode.defaultProps = defaultProps;
CircleNode.displayName = 'CircleNode';
var _default = CircleNode;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(string, 'string', 'src/blocks/circle-node.js');

  __REACT_HOT_LOADER__.register(number, 'number', 'src/blocks/circle-node.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/blocks/circle-node.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/blocks/circle-node.js');

  __REACT_HOT_LOADER__.register(CircleNode, 'CircleNode', 'src/blocks/circle-node.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/blocks/circle-node.js');
})();

;