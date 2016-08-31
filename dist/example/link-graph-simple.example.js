'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkGraphSimpleExample;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Created on 8/30/16. */
function LinkGraphSimpleExample() {
  return _react2.default.createElement(
    _.LinkGraph,
    { width: 200, height: 140 },
    _react2.default.createElement(_.CircleNode, { name: 'Gatsby', cx: 60, cy: 40, r: 10, stroke: 'red' }),
    _react2.default.createElement(_.CircleNode, { name: 'Daisy', cx: 120, cy: 120, r: 10 }),
    _react2.default.createElement(_.CircleNode, { name: 'Ge', cx: 180, cy: 100, r: 10 }),
    _react2.default.createElement(_.StraightConnector, { from: 'Gatsby', to: 'Daisy' }),
    _react2.default.createElement(_.StraightConnector, { from: 'Ge', to: 'Gatsby' })
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LinkGraphSimpleExample, 'LinkGraphSimpleExample', 'src/example/link-graph-simple.example.js');
})();

;