/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import LinkGraph from './LinkGraph';
import Arrow from './Arrow';
import CircleNode from './blocks/CircleNode';
import StraightConnector from './connectors/StraigntConnector';

const NODES = [
  {x: 10, y: 50, key: 'batman'},
  {x: 40, y: 20, key: 'superman'},
  {x: 75, y: 30, key: 'antman'},
  {x: 10, y: 20, key: 'manman'}
];

const LINKS = [
  {from: 'batman', to: 'superman'},
  {from: 'superman', to: 'antman'},
  {from: 'antman', to: 'manman'},
];


export default class HappySandwichMakerExample extends Component {
  render() {
    return (
      <LinkGraph width="200" height="200">
        <defs>
          <Arrow id="arrow" width="10" height="10"/>
        </defs>
        {NODES.map(({x, y, key})=>(
          <CircleNode id={key} key={key} x={x} y={y} r={4}
                      nodeType="node"
                      stroke="black" strokeWidth="1" fill="red"/>
        ))}
        {LINKS.map(({from, to})=>(
          <StraightConnector from={from}
                             to={to}
                             key={`${from}-${to}`}
                             nodeType="link"
                             strokeWidth={1}
                             color="rgba(24, 55, 55, 0.6)"
                             markerEndId="arrow"/>
        ))}
      </LinkGraph>
    );
  }
}


