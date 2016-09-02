'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isDefined = require('../utils/is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Text(_ref) {
  var children = _ref.children;
  var x = _ref.x;
  var y = _ref.y;
  var ax = _ref.ax;
  var ay = _ref.ay;

  var restProps = _objectWithoutProperties(_ref, ['children', 'x', 'y', 'ax', 'ay']);

  if (!(0, _isDefined2.default)(x) && (0, _isDefined2.default)(ax)) {
    x = ax;
  }

  if (!(0, _isDefined2.default)(y) && (0, _isDefined2.default)(ay)) {
    y = ay;
  }

  var props = _extends({
    x: x,
    y: y
  }, restProps);

  return _react2.default.createElement(
    'text',
    props,
    children
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/blocks/text.js');
})();

;