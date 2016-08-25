"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOutOfBounds = isOutOfBounds;
/**
 * Created by ge on 8/11/16.
 */
function isOutOfBounds(bounds, point) {
  var from = bounds[0];
  var to = bounds[1];
  if (point[0] > Math.max(from[0], to[0]) || point[0] < Math.min(from[0], to[0]) || point[1] > Math.max(from[1], to[1]) || point[1] < Math.max(from[1], to[1])) {
    return true;
  }
  return false;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isOutOfBounds, "isOutOfBounds", "src/utils/isOutOfBounds.js");
})();

;