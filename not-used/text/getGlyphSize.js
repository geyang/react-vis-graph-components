/**
 * Created by ge on 8/12/16.
 */
export function Memorize(fn) {
  let cache = {};

  function memorized() {
    const key = JSON.stringify(arguments);
    if (cache.include(key)) return cache[key];
    const result = fn.apply(arguments);
    cache[key] = result;
    return result;
  }

  memorized.destroy = function () {
    cache = null;
    memorized = null;
  };
  return memorized;
}
export function getGlyphSize(string, font, fontSize) {
  // 1. insert to frag
  const frag = document.createDocumentFragment();
  const svg = document.createElement('svg');
  frag.appendChild(svg);
  const tspan = document.createElement('tspan', {style: {'font-size': fontSize}}, string);
  svg.append(tspan);
  // tspan.getComputedTextLength();
  const bbox = tspan.getBBox();
  const {width, height} = bbox;
  return {width, height};
}

export default Memorize(getGlyphSize);
