/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import Arrow from './Arrow';
import TextBlock from './blocks/TextBlock';
import Rectangle from './blocks/Rectangle';
import StraightConnector from './connectors/StraigntConnector';

export default class HappySandwichMakerExample extends Component {
  render() {
    return (
      <svg width="200" height="200">
        <defs>
          <Arrow id="arrow"/>
        </defs>
        <TextBlock text={"this is a line\n of text."}
                   x={10}
                   y={20}
                   width={140}
                   height={40}
                   stroke="black"
                   strokeWidth={2}
                   fill="white"
        />
        <StraightConnector x1="10"
                           y1="10"
                           x2="100"
                           y2="100"
                           strokeWidth={4}
                           color="rgba(24, 55, 55, 0.6)"
                           markerEndId="arrow"/>
      </svg>
    );
  }
}
