'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = StraightConnector;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var STYLEP_ROPS = {
  fill: 'transparent'
};

var number = _react.PropTypes.number;
var string = _react.PropTypes.string;

var propTypes = {
  from: string,
  to: string,
  paddingStart: number,
  paddingEnd: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  markerStartId: string,
  markerMidId: string,
  markerEndId: string,
  stroke: string,
  strokeWidth: number
};

function StraightConnector(_ref) {
  var from = _ref.from;
  var to = _ref.to;
  var paddingStart = _ref.paddingStart;
  var paddingEnd = _ref.paddingEnd;
  var x1 = _ref.x1;
  var y1 = _ref.y1;
  var x2 = _ref.x2;
  var y2 = _ref.y2;
  var markerStartId = _ref.markerStartId;
  var markerMidId = _ref.markerMidId;
  var markerEndId = _ref.markerEndId;
  var _ref$stroke = _ref.stroke;
  var stroke = _ref$stroke === undefined ? 'black' : _ref$stroke;
  var strokeWidth = _ref.strokeWidth;

  var _props = _objectWithoutProperties(_ref, ['from', 'to', 'paddingStart', 'paddingEnd', 'x1', 'y1', 'x2', 'y2', 'markerStartId', 'markerMidId', 'markerEndId', 'stroke', 'strokeWidth']);

  var wayPoints = [[x1, y1], [x2, y2]];
  var d = 'M ' + wayPoints.map(function (pt) {
    return pt.join(', ');
  }).join(' ');

  var markerStart = markerStartId ? 'url(#' + markerStartId + ')' : '';
  var markerMid = markerMidId ? 'url(#' + markerMidId + ')' : '';
  var markerEnd = markerEndId ? 'url(#' + markerEndId + ')' : '';

  var props = _extends({}, STYLEP_ROPS, {
    d: d, stroke: stroke, strokeWidth: strokeWidth, markerStart: markerStart, markerMid: markerMid, markerEnd: markerEnd
  }, _props);
  return _react2.default.createElement('path', props);
}

StraightConnector.graphNodeType = _nodeTypes2.default.LINK;
StraightConnector.propTypes = propTypes;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STYLEP_ROPS, 'STYLEP_ROPS', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(number, 'number', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(StraightConnector, 'StraightConnector', 'src/connectors/straight-connector.js');
})();

;