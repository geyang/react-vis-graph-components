/**
 * Created by ge on 8/11/16.
 */
export function isOutOfBounds(bounds, point) {
  const from = bounds[0];
  const to = bounds[1];
  if (point[0] > Math.max(from[0], to[0]) ||
    point[0] < Math.min(from[0], to[0]) ||
    point[1] > Math.max(from[1], to[1]) ||
    point[1] < Math.max(from[1], to[1])
  ) {
    return true;
  }
  return false;
}
