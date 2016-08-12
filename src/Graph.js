import React, {PropTypes, Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Graph extends Component {
  static propTypes = {};

  shouldComponentUpdate(nextProp, nextState) {
    return shallowCompare(this, nextProp, nextState);
  }

  render() {
    const {..._props} = this.props;
    return (
      <g>
      </g>
    );
  }
}
