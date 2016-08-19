/** Created by ge on 8/14/16. */
import React from "react";
import NODE_TYPES from "../node-types";

const propTypes = {};

export default function CircleNode({
  name,
  cx,
  cy,
  r,
  fill = 'transparent',
  stroke = 'rgba(35, 170, 255, 0.5)',
  strokeWidth = '3',
  children,
  ..._props
}) {
  const props = {
    name, cx, cy, r, fill, stroke, strokeWidth,
    ..._props
  };
  if (typeof children === 'undefined') {
    return <circle {...props}/>;
  }
  return (
    <g>
      <circle {...props}/>
      {children}
    </g>
  );
}

CircleNode.graphNodeType = NODE_TYPES.NODE;
CircleNode.propTypes = propTypes;

