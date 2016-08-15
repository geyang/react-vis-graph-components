/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import LinkGraph from './LinkGraph';
import Arrow from './Arrow';
import CircleNode from './blocks/CircleNode';
import StraightConnector from './connectors/StraigntConnector';

const NODES = [
  {x: 100, y: 50, key: 'batman'},
  {x: 140, y: 80, key: 'superman'},
  {x: 175, y: 130, key: 'antman'},
  {x: 110, y: 120, key: 'manman'}
];

const LINKS = [
  {from: 'batman', to: 'superman'},
  {from: 'superman', to: 'antman'},
  {from: 'antman', to: 'manman'},
];


export default class HappySandwichMakerExample extends Component {
  componentWillMount() {
    this.setState({links: LINKS, nodes: NODES});
  }

  _onMouseEnter(name) {
    return ()=> {
      const [from, to] = name.split('-');
      for (var ind in LINKS) {
        if (LINKS[ind].from === from && LINKS[ind].to === to) {
          break;
        }
      }
      this.setState({
        links: [
          ...LINKS.slice(0, ind),
          {...LINKS[ind], strokeWidth: 4, paddingEnd: 17},
          ...LINKS.slice(ind)
        ]
      });
    };
  }

  _onMouseLeave(name) {
    return ()=> {
      const [from, to] = name.split('-');
      for (var ind in LINKS) {
        if (LINKS[ind].from === from && LINKS[ind].to === to) {
          break;
        }
      }
      this.setState({
        links: [
          ...LINKS.slice(0, ind),
          {...LINKS[ind], strokeWidth: 1, paddingEnd: 5},
          ...LINKS.slice(ind)
        ]
      });
    };
  }

  render() {
    const {links, nodes} = this.state;
    return (
      <LinkGraph width="200" height="200">
        <defs>
          <Arrow id="arrow" width="10" height="10"/>
        </defs>
        {nodes.map(({x, y, key})=>(
          <CircleNode name={key} key={key} x={x} y={y} r={10}
                      nodeType="node"
                      stroke="black" strokeWidth="0" fill="red"/>
        ))}
        {links.map(({from, to, strokeWidth = 1, paddingEnd = 5})=>(
          <StraightConnector from={from}
                             to={to}
                             key={`${from}-${to}`}
                             name={`${from}-${to}`}
                             nodeType="link"
                             strokeWidth={strokeWidth}
                             color="rgba(24, 55, 55, 0.6)"
                             onMouseEnter={this._onMouseEnter(`${from}-${to}`)}
                             onMouseLeave={this._onMouseLeave(`${from}-${to}`)}
                             paddingStart={2}
                             paddingEnd={paddingEnd}
                             markerEndId="arrow"/>
        ))}
      </LinkGraph>
    );
  }
}


