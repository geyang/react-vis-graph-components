"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMidPoint;
/**
 * Created by ge on 8/11/16.
 */
function getMidPoint(from, to) {
  return [(from[0] + to[0]) / 2, (from[1], to[1]) / 2];
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getMidPoint, "getMidPoint", "src/utils/getMidPoint.js");
})();

;