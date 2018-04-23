import React from 'react';
import _ from 'lodash';
import { Markdown } from 'react-markdown-reader';

class MarkdownView extends React.Component {
  shouldComponentUpdate(nextProps: Props) {
    return !_.isEqual(this.props, nextProps);
  }
  render() {
    return <Markdown {...this.props} />;
  }
}

export default MarkdownView;
