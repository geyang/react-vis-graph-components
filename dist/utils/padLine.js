"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = padLine;
/**
 * Created by ge on 8/15/16.
 */
var sqrt = Math.sqrt;
var pow = Math.pow;
function padLine(x1, y1, x2, y2) {
  var pad1 = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
  var pad2 = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

  // const theta = atan((y1 - y2), (x1 - x2));
  var len = sqrt(pow(y2 - y1, 2) + pow(x2 - x1, 2));
  var sin = (y2 - y1) / len;
  var cos = (x2 - x1) / len;
  x1 -= cos * pad1;
  y1 -= sin * pad1;
  x2 += cos * pad2;
  y2 += sin * pad2;
  return {
    x1: x1, x2: x2, y1: y1, y2: y2
  };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sqrt, "sqrt", "src/utils/padLine.js");

  __REACT_HOT_LOADER__.register(pow, "pow", "src/utils/padLine.js");

  __REACT_HOT_LOADER__.register(padLine, "padLine", "src/utils/padLine.js");
})();

;