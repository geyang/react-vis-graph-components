import React, {PropTypes, Component, Children, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import isDefined from './utils/isDefined';
import padLine from './utils/padLine';
import NODE_TYPES from './node-types';

const {number} = PropTypes;
export default class LinkGraph extends Component {

  static propTypes = {
    width: number,
    height: number,
  };

  shouldComponentUpdate(nextProp, nextState) {
    return shallowCompare(this, nextProp, nextState);
  }

  render() {
    const {children, ..._props} = this.props;
    const childArray = Children.toArray(children);
    const defs = childArray.filter(({type}) => (type === NODE_TYPES.DEFS));
    const links = childArray.filter(({type: {graphNodeType}}) => (graphNodeType == NODE_TYPES.LINK));
    const nodes = childArray.filter(({type: {graphNodeType}}) => (graphNodeType == NODE_TYPES.NODE));


    // 1. get all nodes and extract their x, y locations
    // 2. clone the links and subplant the x1, y1 with the xy locations
    // of the nodes.
    const linksWithCoords = links.map(
      link => {
        const {
          from, to, paddingStart = 0, paddingEnd = 0, ..._linkProps
        } = link.props;
        let x1;
        let y1;
        let padding1;
        let x2;
        let y2;
        let padding2;
        if (isDefined(from)) {
          let {
            props: {cx, cy, r, strokeWidth}
          } = nodes.filter(
            ({props: {name: _name}})=>(_name == from)
          )[0];
          console.log(cx, cy);
          if (isDefined(cx) && isDefined(cy)) {
            x1 = cx;
            y1 = cy;
            padding1 = r + strokeWidth / 2 + paddingStart;
          }
        }

        if (isDefined(to)) {
          let {
            props: {cx, cy, r, strokeWidth}
          } = nodes.filter(({props: {name: _name}})=>(_name == to))[0];
          if (isDefined(cx) && isDefined(cy)) {
            x2 = cx;
            y2 = cy;
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
