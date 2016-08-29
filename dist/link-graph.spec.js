'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _linkGraphSimple = require('./example/link-graph-simple.example');

var _linkGraphSimple2 = _interopRequireDefault(_linkGraphSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Render the simple link-nodes component', function (assert) {
  var linkedNodes = _react2.default.createElement(_linkGraphSimple2.default, null);
  assert.isDefined(linkedNodes, 'component should be defined');
  assert.end();
});
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
})();

;