'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BezierConnector;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bezierJs = require('bezier-js');

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var arrayOf = _react.PropTypes.arrayOf;
var oneOf = _react.PropTypes.oneOf;

var propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

var styleProps = {
  fill: 'transparent'
};

function BezierConnector(_ref) {
  var from = _ref.from;
  var to = _ref.to;
  var x1 = _ref.x1;
  var y1 = _ref.y1;
  var x2 = _ref.x2;
  var y2 = _ref.y2;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 20 : _ref$width;
  var _ref$bezierOffset = _ref.bezierOffset;
  var bezierOffset = _ref$bezierOffset === undefined ? 30 : _ref$bezierOffset;
  var _ref$stroke = _ref.stroke;
  var stroke = _ref$stroke === undefined ? 'black' : _ref$stroke;
  var _ref$strokeWidth = _ref.strokeWidth;
  var strokeWidth = _ref$strokeWidth === undefined ? 0 : _ref$strokeWidth;

  var _props = _objectWithoutProperties(_ref, ['from', 'to', 'x1', 'y1', 'x2', 'y2', 'width', 'bezierOffset', 'stroke', 'strokeWidth']);

  var props = _extends({}, styleProps, {
    strokeWidth: 0
  }, _props);

  var line = new _bezierJs2.default(x1, y1, x1 + bezierOffset, y1, x2 - bezierOffset, y2, x2, y2);

  var d = void 0;
  try {
    d = line.outline(width / 2).curves.map(function (bezier) {
      return bezier.toSVG().replace('M', 'L');
    }).join(' ').replace(/^L/i, 'M');
  } catch (e) {
    // if points are degenerate, fall back on regular path
    console.warn(e);
    return _react2.default.createElement('path', _extends({ d: '' }, props));
  }

  console.log(d);

  if (d) {
    return _react2.default.createElement('path', _extends({}, props, { d: d }));
  }
  return _react2.default.createElement('path', _extends({ d: '' }, props));
}

BezierConnector.graphNodeType = _nodeTypes2.default.LINK;
BezierConnector.propTypes = propTypes;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(arrayOf, 'arrayOf', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(styleProps, 'styleProps', 'src/connectors/bezier-connector.js');

  __REACT_HOT_LOADER__.register(BezierConnector, 'BezierConnector', 'src/connectors/bezier-connector.js');
})();

;