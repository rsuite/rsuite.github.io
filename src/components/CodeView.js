import React from 'react';
import _ from 'lodash';
import ReactCodeView from 'react-code-view';

class CodeView extends React.PureComponent {
  render() {
    return <ReactCodeView classPrefix="rs-" {...this.props} />;
  }
}

export default CodeView;
