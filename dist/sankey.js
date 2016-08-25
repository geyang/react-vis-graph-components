'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _isDefined = require('./utils/isDefined');

var _isDefined2 = _interopRequireDefault(_isDefined);

var _linkKey = require('./utils/link-key');

var _linkKey2 = _interopRequireDefault(_linkKey);

var _getWidthSums2 = require('./utils/get-width-sums');

var _getWidthSums3 = _interopRequireDefault(_getWidthSums2);

var _nodeTypes = require('./node-types');

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

var _splitHeadsFromRest2 = require('./utils/splitHeadsFromRest');

var _splitHeadsFromRest3 = _interopRequireDefault(_splitHeadsFromRest2);

var _getAnchorFromRectangleNodes = require('./utils/get-anchor-from-rectangle-nodes');

var _getAnchorFromRectangleNodes2 = _interopRequireDefault(_getAnchorFromRectangleNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react.PropTypes.number;
var Sankey = (_temp = _class = function (_Component) {
  _inherits(Sankey, _Component);

  function Sankey() {
    _classCallCheck(this, Sankey);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sankey).apply(this, arguments));
  }

  _createClass(Sankey, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProp, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProp, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var containerWidth = _props2.width;
      var containerHeight = _props2.height;
      var spacing = _props2.spacing;
      var margin = _props2.margin;

      var _props = _objectWithoutProperties(_props2, ['children', 'width', 'height', 'spacing', 'margin']);

      var childArray = _react.Children.toArray(children);
      var defs = childArray.filter(function (_ref) {
        var type = _ref.type;
        return type === _nodeTypes2.default.DEFS;
      });
      var nodes = childArray.filter(function (_ref2) {
        var graphNodeType = _ref2.type.graphNodeType;
        return graphNodeType === _nodeTypes2.default.NODE;
      });
      var links = childArray.filter(function (_ref3) {
        var graphNodeType = _ref3.type.graphNodeType;
        return graphNodeType === _nodeTypes2.default.LINK;
      });

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

      var defaultWidth = (containerWidth - (stack.length - 1) * spacing) / stack.length;

      var columnWidths = stack.map(function (column) {
        return Math.max.apply(null, column.map(function (_ref4) {
          var _ref4$props = _ref4.props;
          var width = _ref4$props.width;
          var r = _ref4$props.r;
          return width || r * 2;
        }).concat(defaultWidth));
      });

      var nodesWithCoords = _react.Children.toArray(stack.map(function (column, columnIndex) {
        if (column.length === 0) {
          return null;
        }
        var nodeHeights = column.map(function (_ref5) {
          var _ref5$props = _ref5.props;
          var name = _ref5$props.name;
          var height = _ref5$props.height;

          if ((0, _isDefined2.default)(height)) {
            return height;
          }

          var sums = links.reduce(function (_ref6, _ref7) {
            var fromSum = _ref6.fromSum;
            var toSum = _ref6.toSum;
            var _ref7$props = _ref7.props;
            var from = _ref7$props.from;
            var to = _ref7$props.to;
            var width = _ref7$props.width;

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
            x = columnIndex * spacing + columnWidths.slice(0, columnIndex).reduce(function () {
              var a = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
              var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
              return (a || 0) + (b || 0);
            }, 0);
          }
          if (!(0, _isDefined2.default)(y)) {
            y = margin * nodeIndex + nodeHeights.slice(0, nodeIndex).reduce(function () {
              var a = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
              var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
              return (a || 0) + (b || 0);
            }, 0);
          }

          return (0, _react.cloneElement)(node, { x: x, y: y, width: width, height: height }, nodeChild);
        });
      }));

      // const nodeNames = nodes.map(({props: {name}}) => name);
      var nodeYs = {};
      nodesWithCoords.forEach(function (_ref8) {
        var _ref8$props = _ref8.props;
        var name = _ref8$props.name;
        var y = _ref8$props.y;
        var height = _ref8$props.height;
        return nodeYs[name] = y + height / 2;
      });
      var orderedLinks = links.sort(function (_ref9, _ref10) {
        var _ref9$props = _ref9.props;
        var to1 = _ref9$props.to;
        var from1 = _ref9$props.from;
        var _ref10$props = _ref10.props;
        var to2 = _ref10$props.to;
        var from2 = _ref10$props.from;
        return nodeYs[to1] - nodeYs[to2] + nodeYs[from1] - nodeYs[from2];
      });

      var linkWidths = {};
      links.forEach(function (_ref11) {
        var _ref11$props = _ref11.props;
        var from = _ref11$props.from;
        var to = _ref11$props.to;
        var width = _ref11$props.width;

        linkWidths[(0, _linkKey2.default)(from, to)] = width;
      });

      var nodeHash = {};
      nodes.forEach(function (_ref12) {
        var name = _ref12.props.name;

        nodeHash[name] = {
          from: [],
          to: []
        };
      });

      orderedLinks.forEach(function (_ref13) {
        var _ref13$props = _ref13.props;
        var from = _ref13$props.from;
        var to = _ref13$props.to;
        var width = _ref13$props.width;

        nodeHash[from].from.push((0, _linkKey2.default)(from, to));
        nodeHash[to].to.push((0, _linkKey2.default)(from, to));
      });

      var linksWithCoords = orderedLinks.map(function (link, ind) {
        var _link$props = link.props;
        var from = _link$props.from;
        var to = _link$props.to;
        var width = _link$props.width;
        var linkChildren = _link$props.children;

        var _linkProps = _objectWithoutProperties(_link$props, ['from', 'to', 'width', 'children']);

        var _getAnchorFromRectang = (0, _getAnchorFromRectangleNodes2.default)(from, nodesWithCoords, 'topright');

        var x1 = _getAnchorFromRectang.x;
        var y1 = _getAnchorFromRectang.y;

        var _getAnchorFromRectang2 = (0, _getAnchorFromRectangleNodes2.default)(to, nodesWithCoords, 'topleft');

        var x2 = _getAnchorFromRectang2.x;
        var y2 = _getAnchorFromRectang2.y;

        var _getWidthSums = (0, _getWidthSums3.default)(nodeHash, linkWidths, from, to, (0, _linkKey2.default)(from, to));

        var fromSum = _getWidthSums.fromSum;
        var toSum = _getWidthSums.toSum;


        return (0, _react.cloneElement)(link, _extends({
          x1: x1,
          x2: x2,
          y1: y1 + fromSum + width / 2,
          y2: y2 + toSum + width / 2
        }, _linkProps), linkChildren);
      });

      return _react2.default.createElement(
        'svg',
        _extends({
          width: containerWidth,
          height: containerHeight
        }, _props),
        defs,
        linksWithCoords,
        nodesWithCoords
      );
    }
  }]);

  return Sankey;
}(_react.Component), _class.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  /** spacing (horizontal) */
  spacing: number,
  /** margin (vertical) */
  margin: number
}, _temp);
exports.default = Sankey;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(number, 'number', 'src/sankey.js');

  __REACT_HOT_LOADER__.register(Sankey, 'Sankey', 'src/sankey.js');
})();

;