'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Created by ge on 8/15/16.
 */
function isDefined(value) {
  return typeof value !== 'undefined';
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isDefined, 'isDefined', 'src/utils/isDefined.js');
})();

;