import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import isDefined from './utils/isDefined';
import linkKey from './utils/link-key';
import getWidthSums from './utils/get-width-sums';
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
    const nodes = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.NODE));
    const nodeNames = nodes.map(({props: {name}}) => name);
    const links = childArray
      .filter(
        ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.LINK)
      ).sort(
        ({props: {to: to1, from: from1}}, {props: {to: to2, from: from2}}) =>
          (
            nodeNames.indexOf(to1) - nodeNames.indexOf(to2)
            + nodeNames.indexOf(from1) - nodeNames.indexOf(from2)
          )
      );


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

    const columnWidths = stack.map(
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
        const nodeHeights = column.map(
          ({props: {name, height}}) => {
            if (isDefined(height)) {
              return height;
            }

            const {fromSum, toSum} = links
              .reduce(({fromSum, toSum}, {props: {from, to, width}}) => {
                if (from === name) {
                  return {
                    fromSum: fromSum + width,
                    toSum
                  }
                } else if (to === name) {
                  return {
                    fromSum,
                    toSum: toSum + width
                  }
                }
                return {fromSum, toSum}
              }, {fromSum: 0, toSum: 0});
            return Math.max(fromSum, toSum);
          }
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

    const linkWidths = {};
    links.forEach(
      ({props: {from, to, width}}) => {
        linkWidths[linkKey(from, to)] = width;
      }
    );

    const nodeHash = {};
    nodes.forEach(
      ({props: {name}}) => {
        nodeHash[name] = {
          from: [],
          to: []
        }
      }
    );

    links.map(
      ({props: {from, to, width}}) => {
        nodeHash[from].from.push(linkKey(from, to));
        nodeHash[to].to.push(linkKey(from, to));
      }
    );

    const linksWithCoords = links.map(
      (link, ind) => {
        const {
          from, to, width, children, ..._linkProps
        } = link.props;

        const nodes = Children.toArray(nodesWithCoords);
        const {x: x1, y: y1} =
          getAnchorFromRectangleNodes(from, nodes, 'topright');
        const {x: x2, y: y2} =
          getAnchorFromRectangleNodes(to, nodes, 'topleft');

        const {fromSum, toSum} = getWidthSums(nodeHash, linkWidths, from, to, linkKey(from, to));

        return cloneElement(
          link,
          {
            x1,
            x2,
            y1: y1 + fromSum + width / 2,
            y2: y2 + toSum + width / 2,
            ..._linkProps
          },
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
