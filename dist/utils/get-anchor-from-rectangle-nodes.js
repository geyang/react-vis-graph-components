'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAnchorFromRectangleNodes;
/** Created by ge on 8/22/16. */
function getAnchorFromRectangleNodes(name, nodes, id) {
  var _nodes$filter$0$props = nodes.filter(function (_ref) {
    var nodeName = _ref.props.name;
    return nodeName === name;
  })[0].props;
  var x = _nodes$filter$0$props.x;
  var y = _nodes$filter$0$props.y;
  var width = _nodes$filter$0$props.width;
  var height = _nodes$filter$0$props.height;


  if (id === 'left') {
    return {
      x: x,
      y: y + height / 2
    };
  } else if (id === 'right') {
    return {
      x: x + width,
      y: y + height / 2
    };
  } else if (id === 'top') {
    return {
      x: x + width / 2,
      y: y
    };
  } else if (id === 'bottom') {
    return {
      x: x + width / 2,
      y: y + height
    };
  }

  return null;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getAnchorFromRectangleNodes, 'getAnchorFromRectangleNodes', 'src/utils/get-anchor-from-rectangle-nodes.js');
})();

;