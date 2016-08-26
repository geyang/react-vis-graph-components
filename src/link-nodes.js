import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import padLine from './utils/pad-line';
import NODE_TYPES from './node-types';
import getPaddingFromCircleNodes from './utils/get-padding-from-circle-nodes';

// helper functions

const {number} = PropTypes;
export default class LinkGraph extends Component {

  static propTypes = {
    width: number,
    height: number
  };

  shouldComponentUpdate(nextProp, nextState) {
    return shallowCompare(this, nextProp, nextState);
  }

  render() {
    const {children, ..._props} = this.props;
    const childArray = Children.toArray(children);
    const defs = childArray.filter(
      ({type}) => (type === NODE_TYPES.DEFS));
    const links = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.LINK));
    const nodes = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.NODE));

    // 1. get all nodes and extract their cx, cy locations
    // 2. clone the links and subplant the x1, y1 with the cx cy locations
    // of the nodes.
    const linksWithCoords = links.map(link => {
      const {
        from, to, paddingStart = 0, paddingEnd = 0, ..._linkProps
      } = link.props;

      const {cx: x1, cy: y1, r: r1} =
        getPaddingFromCircleNodes(from, nodes);
      const {cx: x2, cy: y2, r: r2} =
        getPaddingFromCircleNodes(to, nodes);

      // calculate the intersection points
      const paddedEndPoints =
        padLine(x1, y1, x2, y2, -r1 - paddingStart, -r2 - paddingEnd);

      return cloneElement(
        link,
        {...paddedEndPoints, ..._linkProps},
        link.children
      );
    });

    return (
      <svg {..._props}>
        {defs}
        {nodes}
        {linksWithCoords}
      </svg>
    );
  }
}
