'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureNodeCoordinates;

var _react = require('react');

var _isDefined = require('./is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureNodeCoordinates(columns, nodes, links, columnWidths, spacing, margin) {
  var nodesWithCoordinates = columns.map(function (column, columnIndex) {
    if (column.length === 0) {
      return null;
    }
    var nodeHeights = column.map(function (_ref) {
      var _ref$props = _ref.props;
      var name = _ref$props.name;
      var height = _ref$props.height;

      if ((0, _isDefined2.default)(height)) {
        return height;
      }

      var sums = links.reduce(function (_ref2, _ref3) {
        var fromSum = _ref2.fromSum;
        var toSum = _ref2.toSum;
        var _ref3$props = _ref3.props;
        var from = _ref3$props.from;
        var to = _ref3$props.to;
        var width = _ref3$props.width;

        if (from === name) {
          return {
            fromSum: fromSum + width,
            toSum: toSum
          };
        } else if (to === name) {
          return {
            fromSum: fromSum,
            toSum: toSum + width
          };
        }
        return { fromSum: fromSum, toSum: toSum };
      }, { fromSum: 0, toSum: 0 });
      return Math.max(sums.fromSum, sums.toSum);
    });

    return column.map(function (node, nodeIndex) {
      var _node$props = node.props;
      var x = _node$props.x;
      var y = _node$props.y;
      var _node$props2 = node.props;
      var _node$props2$width = _node$props2.width;
      var width = _node$props2$width === undefined ? columnWidths[columnIndex] : _node$props2$width;
      var _node$props2$height = _node$props2.height;
      var height = _node$props2$height === undefined ? nodeHeights[nodeIndex] : _node$props2$height;
      var nodeChild = _node$props2.children;


      if (!(0, _isDefined2.default)(x)) {
        x = columnIndex * spacing + columnWidths.slice(0, columnIndex).reduce(function (a, b) {
          return a + b;
        }, 0);
      }
      if (!(0, _isDefined2.default)(y)) {
        y = margin * nodeIndex + nodeHeights.slice(0, nodeIndex).reduce(function (a, b) {
          return a + b;
        }, 0);
      }

      return (0, _react.cloneElement)(node, { x: x, y: y, width: width, height: height }, nodeChild);
    });
  });
  return _react.Children.toArray(nodesWithCoordinates);
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(configureNodeCoordinates, 'configureNodeCoordinates', 'src/utils/configure-node-coordinates.js');
})();

;