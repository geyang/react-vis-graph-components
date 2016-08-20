/**
 * Created by ge on 6/23/16.
 */
import {window} from 'global';
import React, {Component} from 'react';
import LinkGraph from '../link-nodes';
import Arrow from '../arrow';
import CircleNode from '../blocks/circle-nodes';
import StraightConnector from '../connectors/straight-connector';

const {parseInt} = window;

const NODES = [
  {x: 100, y: 50, name: 'batman'},
  {x: 140, y: 80, name: 'superman'},
  {x: 175, y: 130, name: 'antman'},
  {x: 110, y: 120, name: 'manman'}
];

const LINKS = [
  {from: 'batman', to: 'superman'},
  {from: 'superman', to: 'antman'},
  {from: 'antman', to: 'manman'}
];

export default class HappySandwichMakerExample extends Component {
  componentWillMount() {
    this.setState({links: LINKS, nodes: NODES});
  }

  render() {
    const {links, nodes} = this.state;
    return (
      <LinkGraph width={200} height={200}>
        <defs>
          <Arrow id='arrow'/>
        </defs>
        {nodes.map(
          ({x, y, name}) =>
            <CircleNode
              name={name}
              key={name}
              cx={x}
              cy={y}
              r={10}
              stroke='black'
              strokeWidth='0'
              fill='red'/>
        )}
        {links.map(
          ({from, to}) =>
            <StraightConnector
              from={from}
              to={to}
              key={`${from}-${to}`}
              strokeWidth={2}
              color='rgba(24, 55, 55, 0.6)'
              paddingStart={2}
              paddingEnd={9}
              markerEndId='arrow'/>
        )}
      </LinkGraph>
    );
  }
}


