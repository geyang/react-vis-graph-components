'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findColumns;

var _splitHeadsFromRest2 = require('./split-heads-from-rest');

var _splitHeadsFromRest3 = _interopRequireDefault(_splitHeadsFromRest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findColumns(nodes, links) {
  var stack = [];
  var restNodes = nodes || [];
  var restLinks = links || [];
  while (restNodes.length) {
    var heads = [];

    var _splitHeadsFromRest = (0, _splitHeadsFromRest3.default)(restNodes, restLinks);

    heads = _splitHeadsFromRest.heads;
    restNodes = _splitHeadsFromRest.restNodes;
    restLinks = _splitHeadsFromRest.restLinks;

    if (!heads.length) {
      break;
    }
    stack.push(heads);
  }

  return stack;
} /**
   * Created on 8/25/16.
   */
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(findColumns, 'findColumns', 'src/utils/find-columns.js');
})();

;