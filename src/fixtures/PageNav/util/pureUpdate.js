import _ from 'lodash';

function pureUpdate(nextProps, nextState, nextContext) {
  if (!_.isEqual(this.props, nextProps)) {
    return true;
  }
  if (!_.isEqual(this.state, nextState)) {
    return true;
  }

  if (!_.isEqual(this.context, nextContext)) {
    return true;
  }
  return false;
}

export default pureUpdate;
