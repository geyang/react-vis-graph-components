'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by ge on 8/17/16.
 */
var NODE_TYPES = {
  DEFS: 'defs',
  LINK: 'link',
  NODE: 'node'
};
var _default = NODE_TYPES;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NODE_TYPES, 'NODE_TYPES', 'src/node-types.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/node-types.js');
})();

;