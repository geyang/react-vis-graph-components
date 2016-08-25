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
var SankeyGraph = (_temp = _class = function (_Component) {
  _inherits(SankeyGraph, _Component);

  function SankeyGraph() {
    _classCallCheck(this, SankeyGraph);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SankeyGraph).apply(this, arguments));
  }

  _createClass(SankeyGraph, [{
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
      var links = childArray.filter(function (_ref2) {
        var graphNodeType = _ref2.type.graphNodeType;
        return graphNodeType === _nodeTypes2.default.LINK;
      });
      var nodes = childArray.filter(function (_ref3) {
        var graphNodeType = _ref3.type.graphNodeType;
        return graphNodeType === _nodeTypes2.default.NODE;
      });

      /* 2. find head
       *      - iterate through notes, iterate through links */
      // get headNodes and nonHeadNodes;
      var stack = [];
      var linksBetween = [];
      var restNodes = nodes || [];
      var restLinks = links || [];
      while (restNodes.length) {
        var heads = [];
        var linksFrom = [];

        var _splitHeadsFromRest = (0, _splitHeadsFromRest3.default)(restNodes, restLinks);

        heads = _splitHeadsFromRest.heads;
        linksFrom = _splitHeadsFromRest.linksFrom;
        restNodes = _splitHeadsFromRest.restNodes;
        restLinks = _splitHeadsFromRest.restLinks;

        if (!heads.length) {
          break;
        }
        stack.push(heads);
        linksBetween.push(linksFrom);
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

      var nodesWithCoords = stack.map(function (column, columnIndex) {
        if (column.length === 0) {
          return;
        }
        var defaultHeight = (containerHeight - (column.length - 1) * margin) / column.length;

        var nodeHeights = column.map(function (_ref5) {
          var _ref5$props$height = _ref5.props.height;
          var height = _ref5$props$height === undefined ? defaultHeight : _ref5$props$height;
          return height;
        });

        return column.map(function (node, nodeIndex) {
          var _node$props = node.props;
          var x = _node$props.x;
          var y = _node$props.y;
          var _node$props$width = _node$props.width;
          var width = _node$props$width === undefined ? columnWidths[columnIndex] : _node$props$width;
          var _node$props$height = _node$props.height;
          var height = _node$props$height === undefined ? nodeHeights[nodeIndex] : _node$props$height;
          var children = _node$props.children;


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

          return (0, _react.cloneElement)(node, { x: x, y: y, width: width, height: height }, children);
        });
      });

      var linksWithCoords = links.map(function (link) {
        var _link$props = link.props;
        var from = _link$props.from;
        var to = _link$props.to;
        var _link$props$paddingSt = _link$props.paddingStart;
        var paddingStart = _link$props$paddingSt === undefined ? 0 : _link$props$paddingSt;
        var _link$props$paddingEn = _link$props.paddingEnd;
        var paddingEnd = _link$props$paddingEn === undefined ? 0 : _link$props$paddingEn;
        var children = _link$props.children;

        var _linkProps = _objectWithoutProperties(_link$props, ['from', 'to', 'paddingStart', 'paddingEnd', 'children']);

        var nodes = _react.Children.toArray(nodesWithCoords);

        var _getAnchorFromRectang = (0, _getAnchorFromRectangleNodes2.default)(from, nodes, 'right');

        var x1 = _getAnchorFromRectang.x;
        var y1 = _getAnchorFromRectang.y;

        var _getAnchorFromRectang2 = (0, _getAnchorFromRectangleNodes2.default)(to, nodes, 'left');

        var x2 = _getAnchorFromRectang2.x;
        var y2 = _getAnchorFromRectang2.y;


        return (0, _react.cloneElement)(link, _extends({ x1: x1, x2: x2, y1: y1, y2: y2 }, _linkProps), children);
      });

      return _react2.default.createElement(
        'svg',
        _extends({
          width: containerWidth,
          height: containerHeight
        }, _props),
        defs,
        linksWithCoords,
        _react.Children.toArray(nodesWithCoords)
      );
    }
  }]);

  return SankeyGraph;
}(_react.Component), _class.propTypes = {
  width: number,
  height: number,
  /** spacing (horizontal) */
  spacing: number,
  /** margin (vertical) */
  margin: number
}, _temp);
exports.default = SankeyGraph;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(number, 'number', 'src/sankey.js');

  __REACT_HOT_LOADER__.register(SankeyGraph, 'SankeyGraph', 'src/sankey.js');
})();

;