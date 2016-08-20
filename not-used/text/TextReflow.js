/**
 * Created by ge on 8/12/16.
 */
/*
 React D3 Text Wrap
 Author Ge Yang @episodeyang
 Adapted from Vijith Assar
 */
import React, {PropTypes} from 'react';
import PureRenderComponent from 'react-addons-pure-render';
import getGlyphSize from './getGlyphSize';

export default class TextReflow extends PureRenderComponent {

  componentDidMount() {
    // places the bounds here.
  }

  layoutSubstrings() {

  }

  render() {
    const {x, y, width, height, lineHeight, children: text, ..._props} = this.props;
    const style = {};
    if (lineHeight) style.lineHeight = lineHeight;

    const bboxes = text.map((char)=>({char, ...getGlyphSize(char)}));

    const segments = [];
    let subString = '';
    let subStringLength = 0;
    for (var index in bboxes) {
      let {width, char} = bboxes[index];
      let newLength = subStringLength + width;
      if (newLength > width) {
        segments.push(subString);
        subString = '';
        subStringLength = 0;
      } else {
        subString += char;
        subStringLength += width;
      }
    }

    return (
      <Text x={x} y={y} width={width} height={height}
            style={style}>{segments.map((_seg)=>(<tspan>{_seg}</tspan>))}</Text>
    );
  }
};

