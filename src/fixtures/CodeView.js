import React from 'react';
import _ from 'lodash';
import ReactCodeView from 'react-code-view';

class CodeView extends React.Component {
  shouldComponentUpdate(nextProps: Props) {
    return !_.isEqual(this.props, nextProps);
  }
  render() {
    return <ReactCodeView classPrefix="rs-" {...this.props} />;
  }
}

export default CodeView;
