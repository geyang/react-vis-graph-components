import test from 'tape';
import React, {Component}  from 'react';
import SankeyExample from './example/sankey-simple.example';

test('Render the simple link-nodes component', assert => {
  const sankey = <SankeyExample/>;
  assert.end();
});
