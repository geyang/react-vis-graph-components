'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SankeyDiagramSimpleExample;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodes = [{ name: 'page 1', text: 'Visitors' }, { name: 'page 2', text: 'Page 2' }, { name: 'loss 1', text: 'left' }, { name: 'page 3', text: 'Page 3' }, { name: 'loss 2', text: 'left' }, { name: 'retention', text: 'completed Purchase (50%)' }, { name: 'total loss', text: 'Total Loss (50%)' }];

var links = [{ from: 'page 1', to: 'page 2', value: 60 }, { from: 'page 1', to: 'loss 1', value: 40 }, { from: 'page 2', to: 'page 3', value: 50 }, { from: 'page 2', to: 'loss 2', value: 10 }, { from: 'page 3', to: 'retention', value: 50 }, { from: 'loss 1', to: 'total loss', value: 40 }, { from: 'loss 2', to: 'total loss', value: 10 }];

function SankeyDiagramSimpleExample() {
  return _react2.default.createElement(
    _.Sankey,
    { width: 900, height: 190, columnSpacing: 80, blockSpacing: 20 },
    _react2.default.createElement(
      _.Text,
      { x: 10, y: 100 },
      'LeNet++ with Centroid Loss'
    ),
    nodes.map(function (_ref) {
      var name = _ref.name;
      var text = _ref.text;
      return _react2.default.createElement(
        _.RectangleNode,
        {
          key: name,
          name: name,
          width: 60,
          fill: 'white' },
        _react2.default.createElement(
          _.BlockAnchor,
          {
            component: _.Text,
            alignVertical: 'middle',
            dominantBaseline: 'middle',
            margin: 10 },
          text
        )
      );
    }),
    links.map(function (_ref2) {
      var from = _ref2.from;
      var to = _ref2.to;
      var value = _ref2.value;
      return _react2.default.createElement(_.BezierConnector, {
        key: from + '-' + to,
        from: from,
        to: to,
        width: value * 1.5,
        fill: 'rgba(0, 0, 0, 0.15)',
        color: 'rgba(24, 55, 55, 0.6)' });
    })
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(nodes, 'nodes', 'src/example/sankey-simple.example.js');

  __REACT_HOT_LOADER__.register(links, 'links', 'src/example/sankey-simple.example.js');

  __REACT_HOT_LOADER__.register(SankeyDiagramSimpleExample, 'SankeyDiagramSimpleExample', 'src/example/sankey-simple.example.js');
})();

;