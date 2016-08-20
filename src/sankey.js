import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import isDefined from './utils/isDefined';
import padLine from './utils/padLine';
import NODE_TYPES from './node-types';

// helper functions
function getPaddingFromCircleNodes(name, nodes, padding) {
  const {props: {cx, cy, r, strokeWidth}} =
    nodes.filter(({props: {name: nodeName}}) => (nodeName === name))[0];
  if (isDefined(cx) && isDefined(cy)) {
    return {cx, cy, totalPadding: r + strokeWidth / 2 + padding};
  }
  return null;
}

const {number} = PropTypes;
export default class SankeyGraph extends Component {

  static propTypes = {
    /** margin (vertical) */
    margin: number,
    /** space (horizontal) */
    space: number
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

    /* 2. find head
     *      - iterate through notes, iterate through links */
    const headNodes = nodes.filter(
      ({props: {name}}) => {
        return !links.filter(({props: {to}}) => (to === name)).length;
      }
    );

    const childNodes = [];
    /*  find next layer column by column, get total number of columns. */
    /*  get the column with the maximum number of blocks */
    /*  add padding between, calculate xy location */
    /*  clone the nodes and supplant the x, y with the xy locations of the
     nodes. */
    /*  clone the links and supplant the x, y, 1, 2 with the xy locations
     of the nodes. */
    function getTos(node) {
      const {name} = node.props || {};
      const tos = links
        .filter(({props: {from}}) => (from === name))
        .map(({props: {to}}) => to);
      // now find the next nodes;

    }

    headNodes.map(getTos);

    const linksWithCoords = links.map(
      link => {
        const {from, to, paddingStart = 0, paddingEnd = 0, ..._linkProps} = link.props;
        let x1, y1, padding1, x2, y2, padding2;
        if (isDefined(from)) {
          let {props: {x, y, r, strokeWidth}} = nodes.filter(
            ({props: {name: _name}}) => (_name === from)
          )[0];
          if (isDefined(x) && isDefined(y)) {
            x1 = x;
            y1 = y;
            padding1 = r + strokeWidth / 2 + paddingStart;
          }
        }

        if (isDefined(to)) {
          let {props: {x, y, r, strokeWidth}} = nodes.filter(
            ({props: {name: _name}}) => (_name === to)
          )[0];
          if (isDefined(x) && isDefined(y)) {
            x2 = x;
            y2 = y;
            padding2 = r + strokeWidth / 2 + paddingEnd;
          }
        }

        // calculate the intersection points
        const paddedEndPoints = padLine(x1, y1, x2, y2, -padding1, -padding2);
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
