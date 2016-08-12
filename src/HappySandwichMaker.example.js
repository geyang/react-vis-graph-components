/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import Arrow from './Arrow';
import SquareConnector from './connectors/SquareConnector';

export default class HappySandwichMakerExample extends Component {
  render() {
    return (
      <svg width="200" height="200">
        <defs>
          <Arrow id="arrow"/>
        </defs>
        <SquareConnector from={[10, 10]}
                         fromDirection={0}
                         to={[100, 100]}
                         toDirection={0}
                         controlPoint={[50, 50]}
                         radius={10}
                         width={4}
                         color="rgba(24, 55, 55, 0.6)"
                         markerStartId="arrow"/>
      </svg>
    );
  }
}
