import React, {PropTypes, Component, cloneElement} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ByProp from './utils/byProp';

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
      const {from, to, nodeType, ..._linkProps} = link.props;
      if (typeof from !== 'undefined') {
        const fromNode = nodes.filter(({props: {id: _id}})=>(_id == from))[0];
        if (typeof fromNode !== 'undefined') {
          _linkProps.x1 = fromNode.props.x;
          _linkProps.y1 = fromNode.props.y;
        }
      }

      if (typeof to !== 'undefined') {
        const fromNode = nodes.filter(({props: {id: _id}})=>(_id == to))[0];
        if (typeof fromNode !== 'undefined') {
          _linkProps.x2 = fromNode.props.x;
          _linkProps.y2 = fromNode.props.y;
        }
      }
      return cloneElement(link, {..._linkProps}, link.children);
    });

    return (
      <svg {..._props}>
        {defs}
        {linksWithCoords}
        {nodes}
      </svg>
    );
  }
}
