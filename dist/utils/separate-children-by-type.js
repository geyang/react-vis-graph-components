'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = separateChildrenByType;

var _react = require('react');

var _nodeTypes = require('../node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Created on 8/26/16. */
function separateChildrenByType(children) {
  var childArray = _react.Children.toArray(children);

  var childrenByType = {
    defs: [],
    nodes: [],
    links: [],
    rest: []
  };

  childArray.forEach(function (child) {
    var type = child.type;

    if (!type) {
      childrenByType.rest.push(child);
    } else if (type === _nodeTypes2.default.DEFS) {
      childrenByType.defs.push(child);
    } else if (type.graphNodeType === _nodeTypes2.default.NODE) {
      childrenByType.nodes.push(child);
    } else if (type.graphNodeType === _nodeTypes2.default.LINK) {
      childrenByType.links.push(child);
    }
  });
  return childrenByType;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(separateChildrenByType, 'separateChildrenByType', 'src/utils/separate-children-by-type.js');
})();

;