/**
 * Created by ge on 8/12/16.
 */

export default function padBoundingBox(bound, padding) {
  const {x, y, width, height} = bound;
  if (padding === 0) {
    return bound
  } else {
    return {
      x: parseInt(x) + padding,
      y: parseInt(y) + padding,
      width: width - padding * 2,
      height: height - padding * 2
    }
  }
};
