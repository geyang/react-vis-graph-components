/**
 * Created by ge on 8/15/16.
 */
export function isArray(obj) {
  return (typeof obj.length !== 'undefined' && typeof obj !== 'string');
}
