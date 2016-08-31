'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPaddingFromCircleNodes;

var _isDefined = require('./is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPaddingFromCircleNodes(name, nodes) {
  var _nodes$filter$0$props = nodes.filter(function (_ref) {
    var nodeName = _ref.props.name;
    return nodeName === name;
  })[0].props;
  var cx = _nodes$filter$0$props.cx;
  var cy = _nodes$filter$0$props.cy;
  var r = _nodes$filter$0$props.r;

  if ((0, _isDefined2.default)(cx) && (0, _isDefined2.default)(cy)) {
    return { cx: cx, cy: cy, r: r };
  }
  return null;
} /** Created on 8/22/16. */
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getPaddingFromCircleNodes, 'getPaddingFromCircleNodes', 'src/utils/get-padding-from-circle-nodes.js');
})();

;