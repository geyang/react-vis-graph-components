/**
 * Created by ge on 8/11/16.
 */
const {min, max} = Math;

export function bound1D(bound, x) {
  return max(
    min(
      x,
      max(bound[0], bound[1])
    ),
    min(bound[0], bound[1])
  )
}

export function bound2D(bounds, point) {
  const [from, to] = bounds;
  return [
    bound1D([from[0], to[0]], point[0]),
    bound1D([from[1], to[1]], point[1])
  ]
}
