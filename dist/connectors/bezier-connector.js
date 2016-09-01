'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bezierJs = require('bezier-js');

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var STYLErestProps = {
  fill: 'transparent'
};

var number = _react.PropTypes.number;
var string = _react.PropTypes.string;

var propTypes = {
  from: string,
  to: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  /** width of the bezier connector */
  width: number.isRequired,
  /** offset for the anchor points of the cubit bezier curve */
  bezierOffset: number,
  stroke: string,
  strokeWidth: number
};

function BezierConnector(_ref) {
  var from = _ref.from;
  var to = _ref.to;
  var x1 = _ref.x1;
  var y1 = _ref.y1;
  var x2 = _ref.x2;
  var y2 = _ref.y2;
  var width = _ref.width;
  var _ref$bezierOffset = _ref.bezierOffset;
  var bezierOffset = _ref$bezierOffset === undefined ? 30 : _ref$bezierOffset;
  var _ref$stroke = _ref.stroke;
  var stroke = _ref$stroke === undefined ? 'black' : _ref$stroke;
  var _ref$strokeWidth = _ref.strokeWidth;
  var strokeWidth = _ref$strokeWidth === undefined ? 0 : _ref$strokeWidth;

  var pathProps = _objectWithoutProperties(_ref, ['from', 'to', 'x1', 'y1', 'x2', 'y2', 'width', 'bezierOffset', 'stroke', 'strokeWidth']);

  var props = _extends({}, STYLErestProps, {
    strokeWidth: 0
  }, pathProps);

  var line = new _bezierJs2.default(x1, y1, x1 + bezierOffset, y1, x2 - bezierOffset, y2, x2, y2);

  try {
    var d = line.outline(width / 2).curves.map(function (bezier) {
      return bezier.toSVG().replace('M', 'L');
    }).join(' ').replace(/^L/i, 'M');
    return _react2.default.createElement('path', _extends({}, props, { d: d }));
  } catch (e) {
    // if points are degenerate, fall back on regular path
    return _react2.default.createElement('path', _extends({ d: 'M ' + x1 + ' ' + (y1 + width / 2) + ' L ' + x2 + ' ' + (y2 + width / 2) + '\n    L ' + x2 + ' ' + (y2 - width / 2) + ' L ' + x1 + ' ' + (y1 - width / 2) + ' Z' }, props));
  }
}

BezierConnector.graphNodeType = _nodeTypes2.default.LINK;
BezierConnector.propTypes = propTypes;
var _default = BezierConnector;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STYLErestProps, 'STYLErestProps', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(number, 'number', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(BezierConnector, 'BezierConnector', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/connectors/bezier-connector.js');
})();

;