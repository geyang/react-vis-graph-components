import React, {PropTypes, Component, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ByProp from './utils/byProp';
import isDefined from './utils/isDefined';
import padLine from './utils/padLine';

export const NODE_TYPES = {
  DEFS: 'defs',
  LINK: 'link',
  NODE: 'node'
};

export default class LinkGraph extends Component {
  static propTypes = {};

  shouldComponentUpdate(nextProp, nextState) {
    return shallowCompare(this, nextProp, nextState);
  }

  render() {
    const {children, ..._props} = this.props;
    const _children = children.reduce((l, item)=>l.concat(item), []);
    const defs = _children.filter(({type})=>(type === NODE_TYPES.DEFS));
    const links = _children.filter(ByProp('nodeType', NODE_TYPES.LINK));
    const nodes = _children.filter(ByProp('nodeType', NODE_TYPES.NODE));
    console.log(defs, links, nodes);


    // 1. get all nodes and extract their x, y locations
    // 2. clone the links and subplant the x1, y1 with the xy locations of the nodes.
    const linksWithCoords = links.map((link)=> {
      const {from, to, nodeType, paddingStart = 0, paddingEnd = 0, ..._linkProps} = link.props;
      let x1, y1, padding1, x2, y2, padding2;
      if (isDefined(from)) {
        let {props: {x, y, r, strokeWidth}} = nodes.filter(({props: {id: _id}})=>(_id == from))[0];
        if (isDefined(x) && isDefined(y)) {
          x1 = x;
          y1 = y;
          padding1 = r + strokeWidth / 2 + paddingStart;
        }
      }

      if (isDefined(to)) {
        let {props: {x, y, r, strokeWidth}} = nodes.filter(({props: {id: _id}})=>(_id == to))[0];
        if (isDefined(x) && isDefined(y)) {
          x2 = x;
          y2 = y;
          padding2 = r + strokeWidth / 2 + paddingEnd;
        }
      }

      // calculate the intersection points
      const paddedEndPoints = padLine(x1, y1, x2, y2, -padding1, -padding2);


      return cloneElement(link, {...paddedEndPoints, ..._linkProps}, link.children);
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
