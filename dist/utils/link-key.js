"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linkKey;
/** Created by ge on 8/24/16. */
function linkKey(from, to) {
  return from + "@@" + to;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(linkKey, "linkKey", "src/utils/link-key.js");
})();

;