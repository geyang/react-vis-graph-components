"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitHeadsFromRest;
/** Created by ge on 8/22/16. */

function splitHeadsFromRest() {
  var nodes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var links = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var heads = nodes.filter(function (_ref) {
    var name = _ref.props.name;

    return !links.filter(function (_ref2) {
      var to = _ref2.props.to;
      return to === name;
    }).length;
  });

  var linksFrom = links.filter(function (_ref3) {
    var from = _ref3.props.from;

    return heads.filter(function (_ref4) {
      var name = _ref4.props.name;
      return from === name;
    }).length;
  });

  var restNodes = nodes.filter(function (node) {
    return !heads.includes(node);
  });
  var restLinks = links.filter(function (link) {
    return !linksFrom.includes(link);
  });

  return {
    heads: heads,
    linksFrom: linksFrom,
    restNodes: restNodes,
    restLinks: restLinks
  };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(splitHeadsFromRest, "splitHeadsFromRest", "src/utils/splitHeadsFromRest.js");
})();

;