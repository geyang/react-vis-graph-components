/** Created by ge on 8/22/16. */
import isDefined from './isDefined';
export default function getPaddingFromRectangleNodes(name, nodes, padding = 0) {
  const {props: {x, y, width, height, strokeWidth = 0}} =
    nodes.filter(({props: {name: nodeName}}) => (nodeName === name))[0];
  if (isDefined(x) && isDefined(y)) {
    return {
      x,
      y,
      width: width / 2 + strokeWidth / 2 + padding,
      height: height / 2 + strokeWidth / 2 + padding
    };
  }
  return null;
}
