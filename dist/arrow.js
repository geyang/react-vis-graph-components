'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Arrow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arrow(_ref) {
  var id = _ref.id;
  var _ref$refX = _ref.refX;
  var refX = _ref$refX === undefined ? 0.1 : _ref$refX;
  var _ref$refY = _ref.refY;
  var refY = _ref$refY === undefined ? 2 : _ref$refY;
  var _ref$d = _ref.d;
  var d = _ref$d === undefined ? 'M0,0 V4 L4,2 Z' : _ref$d;
  var _ref$width = _ref.width;
  var markerWidth = _ref$width === undefined ? 5 : _ref$width;
  var _ref$height = _ref.height;
  var markerHeight = _ref$height === undefined ? 5 : _ref$height;
  var _ref$color = _ref.color;
  var fill = _ref$color === undefined ? 'black' : _ref$color;
  var _ref$orient = _ref.orient;
  var orient = _ref$orient === undefined ? 'auto' : _ref$orient;

  var _props = _objectWithoutProperties(_ref, ['id', 'refX', 'refY', 'd', 'width', 'height', 'color', 'orient']);

  var props = {
    id: id, refX: refX, refY: refY, markerWidth: markerWidth, markerHeight: markerHeight, orient: orient
  };
  var pathProps = _extends({
    fill: fill, d: d }, _props);
  return _react2.default.createElement(
    'marker',
    props,
    _react2.default.createElement('path', pathProps)
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Arrow, 'Arrow', 'src/arrow.js');
})();

;