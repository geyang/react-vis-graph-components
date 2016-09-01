import test from 'tape';
import React from 'react';
import LinkNodesExample from './example/link-graph-simple.example';

test('Render the simple link-nodes component', assert => {
  const linkedNodes = <LinkNodesExample/>;
  assert.ok(linkedNodes, 'component should be defined');
  assert.end();
});
