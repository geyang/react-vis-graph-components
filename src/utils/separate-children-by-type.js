/** Created by ge on 8/26/16. */
import {Children} from 'react';
import NODE_TYPES from '../node-types';

export default function separateChildrenByType(children) {
  const childArray = Children.toArray(children);

  const childrenByType = {
    defs: [],
    nodes: [],
    connectors: []
  };
  childArray.forEach(
    child => {
      const {type} = child;
      if (!type) {
        return null;
      } else if (child.type === NODE_TYPES.DEFS) {
        childrenByType.defs.push(child);
      } else if (type.graphNodeType === NODE_TYPES.NODE) {
        childrenByType.nodes.push(child);
      } else if (type.graphNodeType === NODE_TYPES.LINK) {
        childrenByType.links.push(child);
      }
    }
  );
  return childrenByType;
}


