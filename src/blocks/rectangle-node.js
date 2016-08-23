/** Created by ge on 8/14/16. */
import React, {cloneElement} from 'react';
import NODE_TYPES from '../node-types';
import isDefined from '../utils/isDefined';

const propTypes = {};

export default function RectangleNode({
  name,
  x,
  y,
  width,
  height,
  fill = 'transparent',
  stroke = 'rgba(35, 170, 255, 0.5)',
  strokeWidth = '3',
  children,
  ..._props
}) {
  const props = {
    name, x, y, width, height, fill, stroke, strokeWidth,
    ..._props
  };
  // if (isDefined(children)) {
  //   return (
  //     <g>
  //       <circle {...props}/>
        {/*{children.toArray().map(*/}
          {/*child => {*/}
            {/*const {cx, cy, dx, dy} = child.props;*/}
            {/*return cloneElement(child, {x: cx + dx, y: cy + dy});*/}
  //         }
  //       )}
  //     </g>
  //   );
  // }
  return <rect {...props}/>;
}

RectangleNode.graphNodeType = NODE_TYPES.NODE;
RectangleNode.propTypes = propTypes;

