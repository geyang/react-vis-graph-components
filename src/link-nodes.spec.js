import test from 'tape';
import React, {Component}  from 'react';
import LinkNodesExample from './example/link-nodes-simple.example';

test('Render the simple link-nodes component', assert => {
  const linkedNodes = <LinkNodesExample/>;
  assert.end();
});
