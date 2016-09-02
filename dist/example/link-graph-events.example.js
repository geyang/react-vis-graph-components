'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = require('global');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _linkGraph = require('../link-graph');

var _linkGraph2 = _interopRequireDefault(_linkGraph);

var _arrow = require('../arrow');

var _arrow2 = _interopRequireDefault(_arrow);

var _circleNode = require('../blocks/circle-node');

var _circleNode2 = _interopRequireDefault(_circleNode);

var _straightConnector = require('../connectors/straight-connector');

var _straightConnector2 = _interopRequireDefault(_straightConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseInt = _global.window.parseInt;


var NODES = [{ x: 100, y: 50, key: 'batman' }, { x: 140, y: 80, key: 'superman' }, { x: 175, y: 130, key: 'antman' }, { x: 110, y: 120, key: 'manman' }];

var LINKS = [{ from: 'batman', to: 'superman' }, { from: 'superman', to: 'antman' }, { from: 'antman', to: 'manman' }];

var HappySandwichMakerExample = function (_Component) {
  _inherits(HappySandwichMakerExample, _Component);

  function HappySandwichMakerExample() {
    _classCallCheck(this, HappySandwichMakerExample);

    return _possibleConstructorReturn(this, (HappySandwichMakerExample.__proto__ || Object.getPrototypeOf(HappySandwichMakerExample)).apply(this, arguments));
  }

  _createClass(HappySandwichMakerExample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ links: LINKS, nodes: NODES });
    }
  }, {
    key: '_onMouseEnter',
    value: function _onMouseEnter(name) {
      var _this2 = this;

      return function () {
        var _name$split = name.split('-');

        var _name$split2 = _slicedToArray(_name$split, 2);

        var from = _name$split2[0];
        var to = _name$split2[1];

        for (var ind in LINKS) {
          if (LINKS[ind].from === from && LINKS[ind].to === to) {
            return _this2.setState({
              links: [].concat(_toConsumableArray(LINKS.slice(0, parseInt(ind))), [_extends({}, LINKS[ind], { strokeWidth: 4, paddingEnd: 17 })], _toConsumableArray(LINKS.slice(parseInt(ind) + 1)))
            });
          }
        }
      };
    }
  }, {
    key: '_onMouseLeave',
    value: function _onMouseLeave(name) {
      var _this3 = this;

      return function () {
        var _name$split3 = name.split('-');

        var _name$split4 = _slicedToArray(_name$split3, 2);

        var from = _name$split4[0];
        var to = _name$split4[1];

        for (var ind in LINKS) {
          if (LINKS[ind].from === from && LINKS[ind].to === to) {
            return _this3.setState({
              links: [].concat(_toConsumableArray(LINKS.slice(0, parseInt(ind))), [_extends({}, LINKS[ind], { strokeWidth: 2, paddingEnd: 9 })], _toConsumableArray(LINKS.slice(parseInt(ind) + 1)))
            });
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state;
      var links = _state.links;
      var nodes = _state.nodes;

      return _react2.default.createElement(
        _linkGraph2.default,
        { width: 200, height: 200 },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(_arrow2.default, { id: 'arrow', width: '10', height: '10' })
        ),
        nodes.map(function (_ref) {
          var x = _ref.x;
          var y = _ref.y;
          var key = _ref.key;
          return _react2.default.createElement(_circleNode2.default, { name: key, key: key, cx: x, cy: y, r: 10,
            stroke: 'black', strokeWidth: '0', fill: 'red' });
        }),
        links.map(function (_ref2) {
          var from = _ref2.from;
          var to = _ref2.to;
          var _ref2$strokeWidth = _ref2.strokeWidth;
          var strokeWidth = _ref2$strokeWidth === undefined ? 2 : _ref2$strokeWidth;
          var _ref2$paddingEnd = _ref2.paddingEnd;
          var paddingEnd = _ref2$paddingEnd === undefined ? 9 : _ref2$paddingEnd;
          return _react2.default.createElement(_straightConnector2.default, { from: from,
            to: to,
            key: from + '-' + to,
            strokeWidth: strokeWidth,
            color: 'rgba(24, 55, 55, 0.6)',
            onMouseEnter: _this4._onMouseEnter(from + '-' + to),
            onMouseLeave: _this4._onMouseLeave(from + '-' + to),
            paddingStart: 2,
            paddingEnd: paddingEnd,
            markerEndId: 'arrow' });
        })
      );
    }
  }]);

  return HappySandwichMakerExample;
}(_react.Component);

exports.default = HappySandwichMakerExample;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(parseInt, 'parseInt', 'src/example/link-graph-events.example.js');

  __REACT_HOT_LOADER__.register(NODES, 'NODES', 'src/example/link-graph-events.example.js');

  __REACT_HOT_LOADER__.register(LINKS, 'LINKS', 'src/example/link-graph-events.example.js');

  __REACT_HOT_LOADER__.register(HappySandwichMakerExample, 'HappySandwichMakerExample', 'src/example/link-graph-events.example.js');
})();

;