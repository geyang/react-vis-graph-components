'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created on 6/23/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NODES = [{ x: 100, y: 50, name: 'batman' }, { x: 140, y: 80, name: 'superman' }, { x: 175, y: 130, name: 'antman' }, { x: 110, y: 120, name: 'manman' }];

var LINKS = [{ from: 'batman', to: 'superman' }, { from: 'superman', to: 'antman' }, { from: 'antman', to: 'manman' }];

var HappySandwichMakerExample = function (_Component) {
  _inherits(HappySandwichMakerExample, _Component);

  function HappySandwichMakerExample() {
    _classCallCheck(this, HappySandwichMakerExample);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HappySandwichMakerExample).apply(this, arguments));
  }

  _createClass(HappySandwichMakerExample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ links: LINKS, nodes: NODES });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var links = _state.links;
      var nodes = _state.nodes;

      return _react2.default.createElement(
        _linkGraph2.default,
        { width: 200, height: 200 },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(_arrow2.default, { id: 'arrow' })
        ),
        nodes.map(function (_ref) {
          var x = _ref.x;
          var y = _ref.y;
          var name = _ref.name;
          return _react2.default.createElement(_circleNode2.default, {
            name: name,
            key: name,
            cx: x,
            cy: y,
            r: 10,
            stroke: 'black',
            strokeWidth: '0',
            fill: 'red' });
        }),
        links.map(function (_ref2) {
          var from = _ref2.from;
          var to = _ref2.to;
          return _react2.default.createElement(_straightConnector2.default, {
            from: from,
            to: to,
            key: from + '-' + to,
            strokeWidth: 2,
            color: 'rgba(24, 55, 55, 0.6)',
            paddingStart: 2,
            paddingEnd: 9,
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

  __REACT_HOT_LOADER__.register(NODES, 'NODES', 'src/example/link-nodes-simple.example.js');

  __REACT_HOT_LOADER__.register(LINKS, 'LINKS', 'src/example/link-nodes-simple.example.js');

  __REACT_HOT_LOADER__.register(HappySandwichMakerExample, 'HappySandwichMakerExample', 'src/example/link-nodes-simple.example.js');
})();

;