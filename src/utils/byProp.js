/**
 * Created by ge on 8/15/16.
 */
export default function ByProp(prop, match, predicate) {
  return ({props = {}}) => (props[prop] === match);
}
