"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ByProp;
/**
 * Created by ge on 8/15/16.
 */
function ByProp(prop, match, predicate) {
  return function (_ref) {
    var _ref$props = _ref.props;
    var props = _ref$props === undefined ? {} : _ref$props;
    return props[prop] === match;
  };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ByProp, "ByProp", "src/utils/byProp.js");
})();

;