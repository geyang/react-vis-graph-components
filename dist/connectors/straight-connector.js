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

var STYLEP_ROPS = {
  fill: 'transparent'
};

var number = _react.PropTypes.number;
var string = _react.PropTypes.string;

var propTypes = {
  /** the name of the starting node */
  from: string,
  /** the name of the ending node */
  to: string,
  /** the padding to apply to the start of the connector,\
   * typically used to avoid intersecting the node border */
  paddingStart: number,
  /** same as above for the other end */
  paddingEnd: number,
  /** x coordinate of the start, used to override default layout. */
  x1: number,
  /** x coordinate of the end. */
  y1: number,
  /** y coordinate of the start. */
  x2: number,
  /** y coordinate of the end. */
  y2: number,
  /** the marker component to use for the start, need to \
   * be the ID of an element defined inside the <defs> container.*/
  markerStartId: string,
  /** same but for path midpoints */
  markerMidId: string,
  /** same bug for end piont */
  markerEndId: string,
  /** color of the link */
  stroke: string,
  /** width of the link */
  strokeWidth: number
};
var defaultProps = {
  stroke: 'black'
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
  var stroke = _ref.stroke;
  var strokeWidth = _ref.strokeWidth;

  var restProps = _objectWithoutProperties(_ref, ['from', 'to', 'paddingStart', 'paddingEnd', 'x1', 'y1', 'x2', 'y2', 'markerStartId', 'markerMidId', 'markerEndId', 'stroke', 'strokeWidth']);

  var d = 'M ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2;

  var markerStart = markerStartId ? 'url(#' + markerStartId + ')' : '';
  var markerMid = markerMidId ? 'url(#' + markerMidId + ')' : '';
  var markerEnd = markerEndId ? 'url(#' + markerEndId + ')' : '';

  var props = _extends({}, STYLEP_ROPS, {
    d: d, stroke: stroke, strokeWidth: strokeWidth, markerStart: markerStart, markerMid: markerMid, markerEnd: markerEnd
  }, restProps);
  return _react2.default.createElement('path', props);
}

StraightConnector.graphNodeType = _nodeTypes2.default.LINK;
StraightConnector.propTypes = propTypes;
StraightConnector.defaultProps = defaultProps;
StraightConnector.displayName = 'StraightConnector';
var _default = StraightConnector;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STYLEP_ROPS, 'STYLEP_ROPS', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(number, 'number', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(StraightConnector, 'StraightConnector', 'src/connectors/straight-connector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/connectors/straight-connector.js');
})();

;