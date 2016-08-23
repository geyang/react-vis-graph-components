/** Created by ge on 8/22/16. */
import isDefined from './isDefined';
export default function getPaddingFromCircleNodes(name, nodes, padding = 0) {
  const {props: {cx, cy, r, strokeWidth = 0}} =
    nodes.filter(({props: {name: nodeName}}) => (nodeName === name))[0];
  if (isDefined(cx) && isDefined(cy)) {
    return {cx, cy, totalPadding: r + strokeWidth / 2 + padding};
  }
  return null;
}
