"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWidthSums;
/** Created on 8/24/16. */
function getWidthSums(nodeHash, linkWidths, from, to, linkKey) {
  return {
    fromSum: nodeHash[from].from.slice(0, nodeHash[from].from.indexOf(linkKey)).reduce(function (sum, key) {
      return sum + linkWidths[key];
    }, 0),
    toSum: nodeHash[to].to.slice(0, nodeHash[to].to.indexOf(linkKey)).reduce(function (sum, key) {
      return sum + linkWidths[key];
    }, 0)
  };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getWidthSums, "getWidthSums", "src/utils/get-width-sums.js");
})();

;