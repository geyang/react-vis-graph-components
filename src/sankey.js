import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import isDefined from './utils/isDefined';
import NODE_TYPES from './node-types';
import splitHeadsFromRest from './utils/splitHeadsFromRest';
import getAnchorFromRectangleNodes from './utils/get-anchor-from-rectangle-nodes';

const {number} = PropTypes;
export default class SankeyGraph extends Component {

  static propTypes = {
    width: number,
    height: number,
    /** spacing (horizontal) */
    spacing: number,
    /** margin (vertical) */
    margin: number
  };

  shouldComponentUpdate(nextProp, nextState) {
    return shallowCompare(this, nextProp, nextState);
  }

  render() {
    const {
      children,
      width: containerWidth,
      height: containerHeight,
      spacing,
      margin,
      ..._props
    } = this.props;
    const childArray = Children.toArray(children);
    const defs = childArray.filter(
      ({type}) => (type === NODE_TYPES.DEFS));
    const links = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.LINK));
    const nodes = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.NODE));

    /* 2. find head
     *      - iterate through notes, iterate through links */
    // get headNodes and nonHeadNodes;
    const stack = [];
    const linksBetween = [];
    let restNodes = nodes || [];
    let restLinks = links || [];
    while (restNodes.length) {
      let heads = [];
      let linksFrom = [];
      ({heads, linksFrom, restNodes, restLinks} =
        splitHeadsFromRest(restNodes, restLinks));
      if (!heads.length) {
        break;
      }
      stack.push(heads);
      linksBetween.push(linksFrom);
    }

    const defaultWidth =
      (containerWidth - (stack.length - 1) * spacing) /
      stack.length;

    const columnWidths =
      stack.map(
        column =>
          Math.max.apply(null, column.map(
            ({props: {width, r}}) => width || r * 2).concat(defaultWidth)
          )
      );

    const nodesWithCoords = stack.map(
      (column, columnIndex) => {
        if (column.length === 0) {
          return;
        }
        const defaultHeight =
          (containerHeight - (column.length - 1) * margin) /
          column.length;

        const nodeHeights = column.map(
          ({props: {height = defaultHeight}}) => height
        );

        return column.map(
          (node, nodeIndex) => {
            let {
              x,
              y,
              width = columnWidths[columnIndex],
              height = nodeHeights[nodeIndex],
              children
            } = node.props;

            if (!isDefined(x)) {
              x = columnIndex * spacing +
                columnWidths.slice(0, columnIndex)
                  .reduce((a = 0, b = 0) => (a || 0) + (b || 0), 0);
            }
            if (!isDefined(y)) {
              y = margin * nodeIndex +
                nodeHeights.slice(0, nodeIndex)
                  .reduce((a = 0, b = 0) => (a || 0) + (b || 0), 0);
            }

            return cloneElement(
              node,
              {x: x, y: y, width, height},
              children
            );
          }
        );
      }
    );

    const linksWithCoords = links.map(
      link => {
        const {
          from, to, paddingStart = 0, paddingEnd = 0, children, ..._linkProps
        } = link.props;

        const nodes = Children.toArray(nodesWithCoords);
        const {x: x1, y: y1} =
          getAnchorFromRectangleNodes(from, nodes, 'right');
        const {x: x2, y: y2} =
          getAnchorFromRectangleNodes(to, nodes, 'left');

        return cloneElement(
          link,
          {x1, x2, y1, y2, ..._linkProps},
          children
        );
      });

    return (
      <svg
        width={containerWidth}
        height={containerHeight}
        {..._props}>
        {defs}
        {linksWithCoords}
        {Children.toArray(nodesWithCoords)}
      </svg>
    );
  }
}
