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

var _linkKey = require('./utils/link-key');

var _linkKey2 = _interopRequireDefault(_linkKey);

var _getWidthSums2 = require('./utils/get-width-sums');

var _getWidthSums3 = _interopRequireDefault(_getWidthSums2);

var _separateChildrenByType = require('./utils/separate-children-by-type');

var _separateChildrenByType2 = _interopRequireDefault(_separateChildrenByType);

var _findColumns = require('./utils/find-columns');

var _findColumns2 = _interopRequireDefault(_findColumns);

var _configureNodeCoordinates = require('./utils/configure-node-coordinates');

var _configureNodeCoordinates2 = _interopRequireDefault(_configureNodeCoordinates);

var _getAnchorFromRectangleNodes = require('./utils/get-anchor-from-rectangle-nodes');

var _getAnchorFromRectangleNodes2 = _interopRequireDefault(_getAnchorFromRectangleNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react.PropTypes.number;
var Sankey = (_temp = _class = function (_Component) {
  _inherits(Sankey, _Component);

  function Sankey() {
    _classCallCheck(this, Sankey);

    return _possibleConstructorReturn(this, (Sankey.__proto__ || Object.getPrototypeOf(Sankey)).apply(this, arguments));
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

      var _separateChildrenByTy = (0, _separateChildrenByType2.default)(children);

      var defs = _separateChildrenByTy.defs;
      var nodes = _separateChildrenByTy.nodes;
      var links = _separateChildrenByTy.links;


      var columns = (0, _findColumns2.default)(nodes, links);

      var columnWidth = (containerWidth - (columns.length - 1) * spacing) / columns.length;

      var columnWidths = columns.map(function (column) {
        return Math.max.apply(null, column.map(function (_ref) {
          var _ref$props = _ref.props;
          var width = _ref$props.width;
          var r = _ref$props.r;
          return width || r * 2;
        }).concat(columnWidth));
      });

      var nodesWithCoords = (0, _configureNodeCoordinates2.default)(columns, nodes, links, columnWidths, spacing, margin);

      var nodeYs = nodesWithCoords.reduce(function (hash, _ref2) {
        var _ref2$props = _ref2.props;
        var name = _ref2$props.name;
        var y = _ref2$props.y;
        var height = _ref2$props.height;

        return _extends({}, hash, _defineProperty({}, name, y + height / 2));
      }, {});

      // order links by the from and to block vertical position (Y).
      // this is the layout logic that prevents connectors from crossing
      // each other.
      var orderedLinks = links.sort(function (_ref3, _ref4) {
        var _ref3$props = _ref3.props;
        var to1 = _ref3$props.to;
        var from1 = _ref3$props.from;
        var _ref4$props = _ref4.props;
        var to2 = _ref4$props.to;
        var from2 = _ref4$props.from;
        return nodeYs[to1] - nodeYs[to2] + nodeYs[from1] - nodeYs[from2];
      });

      var linkWidths = links.reduce(function (hash, _ref5) {
        var _ref5$props = _ref5.props;
        var from = _ref5$props.from;
        var to = _ref5$props.to;
        var width = _ref5$props.width;

        return _extends({}, hash, _defineProperty({}, (0, _linkKey2.default)(from, to), width));
      }, {});

      var nodeHash = orderedLinks.reduce(function (hash, _ref6) {
        var _extends4;

        var _ref6$props = _ref6.props;
        var from = _ref6$props.from;
        var to = _ref6$props.to;

        return _extends({}, hash, (_extends4 = {}, _defineProperty(_extends4, from, _extends({}, hash[from], {
          from: [].concat(_toConsumableArray(hash[from] && hash[from].from ? hash[from].from : []), [(0, _linkKey2.default)(from, to)])
        })), _defineProperty(_extends4, to, _extends({}, hash[to], {
          to: [].concat(_toConsumableArray(hash[to] && hash[to].to ? hash[to].to : []), [(0, _linkKey2.default)(from, to)])
        })), _extends4));
      }, {});

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
  /** width of svg figure */
  width: number.isRequired,
  /** height of svg figure */
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