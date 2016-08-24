/** Created by ge on 8/22/16. */
import isDefined from './isDefined';
export default function getPaddingFromCircleNodes(name, nodes) {
  const {props: {cx, cy, r}} =
    nodes.filter(({props: {name: nodeName}}) => (nodeName === name))[0];
  if (isDefined(cx) && isDefined(cy)) {
    return {cx, cy, r};
  }
  return null;
}
