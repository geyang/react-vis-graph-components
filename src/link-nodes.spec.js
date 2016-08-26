import test from 'tape';
import React from 'react';
import LinkNodesExample from './example/link-nodes-simple.example';

test('Render the simple link-nodes component', assert => {
  const linkedNodes = <LinkNodesExample/>;
  assert.isDefined(linkedNodes, 'component should be defined');
  assert.end();
});
