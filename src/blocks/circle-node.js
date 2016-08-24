/** Created by ge on 8/14/16. */
import React, {cloneElement} from 'react';
import NODE_TYPES from '../node-types';
import isDefined from '../utils/isDefined';

const propTypes = {};

export default function CircleNode({
  name,
  cx,
  cy,
  r,
  fill = 'transparent',
  stroke = 'rgba(35, 170, 255, 0.5)',
  strokeWidth = 3,
  children,
  ..._props
}) {
  const props = {
    name,
    cx,
    cy,
    r: r - strokeWidth,
    fill,
    stroke,
    strokeWidth,
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
  return <circle {...props}/>;
}

CircleNode.graphNodeType = NODE_TYPES.NODE;
CircleNode.propTypes = propTypes;

