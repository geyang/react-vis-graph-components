'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPaddingFromCircleNodes;

var _isDefined = require('./is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPaddingFromCircleNodes(name, nodes) {
  var _nodes$find = nodes.find(function (_ref) {
    var nodeName = _ref.props.name;
    return nodeName === name;
  });

  var _nodes$find$props = _nodes$find.props;
  var cx = _nodes$find$props.cx;
  var cy = _nodes$find$props.cy;
  var r = _nodes$find$props.r;

  if ((0, _isDefined2.default)(cx) && (0, _isDefined2.default)(cy)) {
    return { cx: cx, cy: cy, r: r };
  }
  return { cx: 0, cy: 0, r: 0 };
} /** Created on 8/22/16. */
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getPaddingFromCircleNodes, 'getPaddingFromCircleNodes', 'src/utils/get-padding-from-circle-nodes.js');
})();

;