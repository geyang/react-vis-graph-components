/** Created by ge on 8/22/16. */
export default function getAnchorFromRectangleNodes(name, nodes, id) {
  const {props: {x, y, width, height}} =
    nodes.filter(({props: {name: nodeName}}) => (nodeName === name))[0];

  if (id === 'left') {
    return {
      x,
      y: y + height / 2
    };
  } else if (id === 'right') {
    return {
      x: x + width,
      y: y + height / 2
    };
  } else if (id === 'top') {
    return {
      x: x + width / 2,
      y
    };
  } else if (id === 'bottom') {
    return {
      x: x + width / 2,
      y: y + height
    };
  } else if (id === 'topleft') {
    return {
      x,
      y
    };
  } else if (id === 'bottomleft') {
    return {
      x,
      y: y + height
    };
  } else if (id === 'topright') {
    return {
      x: x + width,
      y
    };
  } else if (id === 'bottomright') {
    return {
      x: x + width,
      y: y + height
    };
  }

  return null;
}
