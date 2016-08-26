import React, {PropTypes, Component, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import linkKey from './utils/link-key';
import getWidthSums from './utils/get-width-sums';
import separateChildrenByType from './utils/separate-children-by-type';
import findColumns from './utils/find-columns';
import configureNodeCoordinates from './utils/configure-node-coordinates';
import getNodeYs from './utils/get-node-ys';
import getAnchorFromRectangleNodes from
  './utils/get-anchor-from-rectangle-nodes';

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

    const {defs, nodes, links} = separateChildrenByType(children);

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

    const nodesWithCoords =
      configureNodeCoordinates(
        columns,
        nodes,
        links,
        columnWidths,
        spacing,
        margin
      );

    const nodeYs = getNodeYs(nodesWithCoords);

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
