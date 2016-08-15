/**
 * Created by ge on 8/12/16.
 */
/*
 React D3 Text Wrap
 Author Ge Yang @episodeyang
 Adapted from Vijith Assar
 */
import React, {PropTypes, Component} from 'react';
import PureRenderComponent from 'react-addons-pure-render';
import padBoundingBox from './padBoundingBox';

export default class TextWrap extends PureRenderComponent {

  componentDidMount() {
    // places the bounds here.
  }

  render() {
    const {x, y, width, height, padding, lineHeight, children: text, _props} = this.props;
    const paddedBound = padBoundingBox({x, y, width, height}, padding);
    const style = {};
    if (lineHeight) style.lineHeight = lineHeight;

    if (typeof SVGForeignObjectElement !== 'undefined') {

      return (
        <foreignObject
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          {...paddedBound}>
          <xhtml:div style={style} {...paddedBound}>{text}</xhtml:div>
        </foreignObject>
      );
    }

    const textReflowProps = {
      ...paddedBound,
      ..._props
    };

    return (
      <TextReflow {...textReflowProps}>{text}</TextReflow>
    );
  }

};

// var wrap_with_tspans = function (item) {
//   // operate on the first text item in the selection
//   var text_node = item[0];
//   var parent = text_node.parentNode;
//   var text_node_selected = d3.select(text_node);
//   // measure initial size of the text node as rendered
//   var text_node_height = text_node.getBBox().height;
//   var text_node_width = text_node.getBBox().width;
//   // figure out the line height, either from rendered height
//   // of the font or attached styling
//   // only fire the rest of this if the text content
//   // overflows the desired dimensions
//   if (text_node_width > bounds.width) {
//     // store whatever is inside the text node
//     // in a variable and then zero out the
//     // initial content; we'll reinsert in a moment
//     // using tspan elements.
//     var text_to_wrap = text_node_selected.text();
//     text_node_selected.text('');
//     if (text_to_wrap) {
//       // keep track of whether we are splitting by spaces
//       // so we know whether to reinsert those spaces later
//       var break_delimiter;
//       // split at spaces to create an array of individual words
//       var text_to_wrap_array;
//       if (text_to_wrap.indexOf(' ') !== -1) {
//         var break_delimiter = ' ';
//         text_to_wrap_array = text_to_wrap.split(' ');
//       } else {
//         // if there are no spaces, figure out the split
//         // points by comparing rendered text width against
//         // bounds and translating that into character position
//         // cuts
//         break_delimiter = '';
//         var string_length = text_to_wrap.length;
//         var number_of_substrings = Math.ceil(text_node_width / bounds.width);
//         var splice_interval = Math.floor(string_length / number_of_substrings);
//         if (
//           !(splice_interval * number_of_substrings >= string_length)
//         ) {
//           number_of_substrings++;
//         }
//         var text_to_wrap_array = [];
//         var substring;
//         var start_position;
//         for (var i = 0; i < number_of_substrings; i++) {
//           start_position = i * splice_interval;
//           substring = text_to_wrap.substr(start_position, splice_interval);
//           text_to_wrap_array.push(substring);
//         }
//       }
//
//       // new array where we'll store the words re-assembled into
//       // substrings that have been tested against the desired
//       // maximum wrapping width
//       var substrings = [];
//       // computed text length is arguably incorrectly reported for
//       // all tspans after the first one, in that they will include
//       // the width of previous separate tspans. to compensate we need
//       // to manually track the computed text length of all those
//       // previous tspans and substrings, and then use that to offset
//       // the miscalculation. this then gives us the actual correct
//       // position we want to use in rendering the text in the SVG.
//       var total_offset = 0;
//       // object for storing the results of text length computations later
//       var temp = {};
//       // loop through the words and test the computed text length
//       // of the string against the maximum desired wrapping width
//       for (var i = 0; i < text_to_wrap_array.length; i++) {
//         var word = text_to_wrap_array[i];
//         var previous_string = text_node_selected.text();
//         var previous_width = text_node.getComputedTextLength();
//         // initialize the current word as the first word
//         // or append to the previous string if one exists
//         var new_string;
//         if (previous_string) {
//           new_string = previous_string + break_delimiter + word;
//         } else {
//           new_string = word;
//         }
//         // add the newest substring back to the text node and
//         // measure the length
//         text_node_selected.text(new_string);
//         var new_width = text_node.getComputedTextLength();
//         // adjust the length by the offset we've tracked
//         // due to the misreported length discussed above
//         var test_width = new_width - total_offset;
//         // if our latest version of the string is too
//         // big for the bounds, use the previous
//         // version of the string (without the newest word
//         // added) and use the latest word to restart the
//         // process with a new tspan
//         if (new_width > bounds.width) {
//           if (
//             (previous_string) &&
//             (previous_string !== '')
//           ) {
//             total_offset = total_offset + previous_width;
//             temp = {string: previous_string, width: previous_width, offset: total_offset};
//             substrings.push(temp);
//             text_node_selected.text('');
//             text_node_selected.text(word);
//           }
//         }
//         // if we're up to the last word in the array,
//         // get the computed length as is without
//         // appending anything further to it
//         else if (i == text_to_wrap_array.length - 1) {
//           text_node_selected.text('');
//           var final_string = new_string;
//           if (
//             (final_string) &&
//             (final_string !== '')
//           ) {
//             if ((new_width - total_offset) > 0) {
//               new_width = new_width - total_offset
//             }
//             temp = {string: final_string, width: new_width, offset: total_offset};
//             substrings.push(temp);
//           }
//         }
//       }
//
//       // position the overall text node
//       text_node_selected.attr('y', function () {
//         var y_offset = bounds.y;
//         // shift by line-height to move the baseline into
//         // the bounds – otherwise the text baseline would be
//         // at the top of the bounds
//         if (line_height) {
//           y_offset += line_height;
//         }
//         return y_offset;
//       });
//       // shift to the right by the padding value
//       if (padding) {
//         text_node_selected
//           .attr('x', bounds.x)
//         ;
//       }
//
//       // append each substring as a tspan
//       var current_tspan;
//       var tspan_count;
//       // double check that the text content has been removed
//       // before we start appending tspans
//       text_node_selected.text('');
//       for (var i = 0; i < substrings.length; i++) {
//         var substring = substrings[i].string;
//         if (i > 0) {
//           var previous_substring = substrings[i - 1];
//         }
//         // only append if we're sure it won't make the tspans
//         // overflow the bounds.
//         if ((i) * line_height < bounds.height - (line_height * 1.5)) {
//           current_tspan = text_node_selected.append('tspan')
//             .text(substring);
//           // vertical shift to all tspans after the first one
//           current_tspan
//             .attr('dy', function (d) {
//               if (i > 0) {
//                 return line_height;
//               }
//             });
//           // shift left from default position, which
//           // is probably based on the full length of the
//           // text string until we make this adjustment
//           current_tspan
//             .attr('dx', function () {
//               if (i == 0) {
//                 var render_offset = 0;
//               } else if (i > 0) {
//                 render_offset = substrings[i - 1].width;
//                 render_offset = render_offset * -1;
//               }
//               return render_offset;
//             });
//         }
//       }
//     }
//   }
// };

