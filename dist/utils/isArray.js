'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
/**
 * Created by ge on 8/15/16.
 */
function isArray(obj) {
  return typeof obj.length !== 'undefined' && typeof obj !== 'string';
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isArray, 'isArray', 'src/utils/isArray.js');
})();

;