import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import isDefined from './utils/isDefined';
import linkKey from './utils/link-key';
import getWidthSums from './utils/get-width-sums';
import NODE_TYPES from './node-types';
import findColumns from './utils/find-columns';
import configureNodeCoordinates from './utils/configure-node-coordinates';
import getAnchorFromRectangleNodes from './utils/get-anchor-from-rectangle-nodes';

const {number} = PropTypes;
export default class Sankey extends Component {

  static propTypes = {
    width: number.isRequired,
    height: number.isRequired,
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
    const links = childArray.filter(
      ({type: {graphNodeType}}) => (graphNodeType === NODE_TYPES.LINK)
    );

    const columns = findColumns(nodes, links);

    const defaultWidth =
      (containerWidth - (columns.length - 1) * spacing) /
      columns.length;

    const columnWidths = columns.map(
      column =>
        Math.max.apply(null, column.map(
          ({props: {width, r}}) => width || r * 2).concat(defaultWidth)
        )
    );

    const nodesWithCoords = configureNodeCoordinates(columns, nodes, links);

    // const nodeNames = nodes.map(({props: {name}}) => name);
    const nodeYs = {};
    nodesWithCoords.forEach(
      ({props: {name, y, height}}) => (nodeYs[name] = (y + height / 2))
    );
    const orderedLinks = links.sort(
      ({props: {to: to1, from: from1}}, {props: {to: to2, from: from2}}) =>
        (
          nodeYs[to1] - nodeYs[to2] +
          nodeYs[from1] - nodeYs[from2]
        )
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
        };
      }
    );

    orderedLinks.forEach(
      ({props: {from, to, width}}) => {
        nodeHash[from].from.push(linkKey(from, to));
        nodeHash[to].to.push(linkKey(from, to));
      }
    );

    const linksWithCoords = orderedLinks.map(
      (link, ind) => {
        const {
          from, to, width, children: linkChildren, ..._linkProps
        } = link.props;

        const {x: x1, y: y1} =
          getAnchorFromRectangleNodes(from, nodesWithCoords, 'topright');
        const {x: x2, y: y2} =
          getAnchorFromRectangleNodes(to, nodesWithCoords, 'topleft');

        const {fromSum, toSum} =
          getWidthSums(nodeHash, linkWidths, from, to, linkKey(from, to));

        return cloneElement(
          link,
          {
            x1,
            x2,
            y1: y1 + fromSum + width / 2,
            y2: y2 + toSum + width / 2,
            ..._linkProps
          },
          linkChildren
        );
      });

    return (
      <svg
        width={containerWidth}
        height={containerHeight}
        {..._props}>
        {defs}
        {linksWithCoords}
        {nodesWithCoords}
      </svg>
    );
  }
}
