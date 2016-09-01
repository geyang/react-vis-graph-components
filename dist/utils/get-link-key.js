"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLinkKey;
/** Created on 8/24/16. */
function getLinkKey(from, to) {
  return from + "@@" + to;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLinkKey, "getLinkKey", "src/utils/get-link-key.js");
})();

;