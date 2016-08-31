'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RectangleNode;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

var _isDefined = require('../utils/is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** Created on 8/14/16. */


var string = _react.PropTypes.string;
var number = _react.PropTypes.number;
var any = _react.PropTypes.any;


var propTypes = {
  name: string,
  x: number,
  y: number,
  width: number,
  height: number,
  margin: number,
  fill: string,
  stroke: number,
  strokeWidth: number,
  children: any
};

// todo: implement container block API as a higher level component
function RectangleNode(_ref) {
  var name = _ref.name;
  var x = _ref.x;
  var y = _ref.y;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 10 : _ref$width;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 10 : _ref$height;
  var _ref$margin = _ref.margin;
  var margin = _ref$margin === undefined ? 0 : _ref$margin;
  var _ref$fill = _ref.fill;
  var fill = _ref$fill === undefined ? 'transparent' : _ref$fill;
  var _ref$stroke = _ref.stroke;
  var stroke = _ref$stroke === undefined ? 'rgba(35, 170, 255, 0.5)' : _ref$stroke;
  var _ref$strokeWidth = _ref.strokeWidth;
  var strokeWidth = _ref$strokeWidth === undefined ? '3' : _ref$strokeWidth;
  var children = _ref.children;

  var _props = _objectWithoutProperties(_ref, ['name', 'x', 'y', 'width', 'height', 'margin', 'fill', 'stroke', 'strokeWidth', 'children']);

  var props = _extends({
    name: name,
    x: x + strokeWidth / 2 + margin,
    y: y + strokeWidth / 2 + margin,
    width: width - strokeWidth - margin * 2,
    height: height - strokeWidth - margin * 2,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth
  }, _props);

  if ((0, _isDefined2.default)(children)) {
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('rect', props),
      _react.Children.toArray(children).map(function (child) {
        return (0, _react.cloneElement)(child, {
          anchorX: x,
          anchorY: y,
          anchorWidth: width,
          anchorHeight: height
        });
      })
    );
  }
  return _react2.default.createElement('rect', props);
}

RectangleNode.graphNodeType = _nodeTypes2.default.NODE;
RectangleNode.propTypes = propTypes;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(string, 'string', 'src/blocks/rectangle-node.js');

  __REACT_HOT_LOADER__.register(number, 'number', 'src/blocks/rectangle-node.js');

  __REACT_HOT_LOADER__.register(any, 'any', 'src/blocks/rectangle-node.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/blocks/rectangle-node.js');

  __REACT_HOT_LOADER__.register(RectangleNode, 'RectangleNode', 'src/blocks/rectangle-node.js');
})();

;