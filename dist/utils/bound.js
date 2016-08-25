"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.bound1D = bound1D;
exports.bound2D = bound2D;
/**
 * Created by ge on 8/11/16.
 */
var min = Math.min;
var max = Math.max;
function bound1D(bound, x) {
  return max(min(x, max(bound[0], bound[1])), min(bound[0], bound[1]));
}

function bound2D(bounds, point) {
  var _bounds = _slicedToArray(bounds, 2);

  var from = _bounds[0];
  var to = _bounds[1];

  return [bound1D([from[0], to[0]], point[0]), bound1D([from[1], to[1]], point[1])];
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(min, "min", "src/utils/bound.js");

  __REACT_HOT_LOADER__.register(max, "max", "src/utils/bound.js");

  __REACT_HOT_LOADER__.register(bound1D, "bound1D", "src/utils/bound.js");

  __REACT_HOT_LOADER__.register(bound2D, "bound2D", "src/utils/bound.js");
})();

;