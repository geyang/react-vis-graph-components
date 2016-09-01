'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAnchorFromRectangleNodes;
/** Created on 8/22/16. */
var ANCHOR_CONSTANTS = exports.ANCHOR_CONSTANTS = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
  TOPLEFT: 'topleft',
  BOTTOMLEFT: 'bottomleft',
  TOPRIGHT: 'topright',
  BOTTOMRIGHT: 'bottomright'
};

var LEFT = ANCHOR_CONSTANTS.LEFT;
var RIGHT = ANCHOR_CONSTANTS.RIGHT;
var TOP = ANCHOR_CONSTANTS.TOP;
var BOTTOM = ANCHOR_CONSTANTS.BOTTOM;
var TOPLEFT = ANCHOR_CONSTANTS.TOPLEFT;
var BOTTOMLEFT = ANCHOR_CONSTANTS.BOTTOMLEFT;
var TOPRIGHT = ANCHOR_CONSTANTS.TOPRIGHT;
var BOTTOMRIGHT = ANCHOR_CONSTANTS.BOTTOMRIGHT;
function getAnchorFromRectangleNodes(name, nodes, id) {
  var _nodes$find = nodes.find(function (_ref) {
    var nodeName = _ref.props.name;
    return nodeName === name;
  });

  var _nodes$find$props = _nodes$find.props;
  var x = _nodes$find$props.x;
  var y = _nodes$find$props.y;
  var width = _nodes$find$props.width;
  var height = _nodes$find$props.height;


  switch (id) {
    case LEFT:
      return {
        x: x,
        y: y + height / 2
      };
    case RIGHT:
      return {
        x: x + width,
        y: y + height / 2
      };
    case TOP:
      return {
        x: x + width / 2,
        y: y
      };
    case BOTTOM:
      return {
        x: x + width / 2,
        y: y + height
      };
    case TOPLEFT:
      return {
        x: x,
        y: y
      };
    case BOTTOMLEFT:
      return {
        x: x,
        y: y + height
      };
    case TOPRIGHT:
      return {
        x: x + width,
        y: y
      };
    case BOTTOMRIGHT:
      return {
        x: x + width,
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

  __REACT_HOT_LOADER__.register(ANCHOR_CONSTANTS, 'ANCHOR_CONSTANTS', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(LEFT, 'LEFT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(RIGHT, 'RIGHT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(TOP, 'TOP', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(BOTTOM, 'BOTTOM', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(TOPLEFT, 'TOPLEFT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(BOTTOMLEFT, 'BOTTOMLEFT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(TOPRIGHT, 'TOPRIGHT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(BOTTOMRIGHT, 'BOTTOMRIGHT', 'src/utils/get-anchor-from-rectangle-nodes.js');

  __REACT_HOT_LOADER__.register(getAnchorFromRectangleNodes, 'getAnchorFromRectangleNodes', 'src/utils/get-anchor-from-rectangle-nodes.js');
})();

;