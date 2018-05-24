import React from 'react';
import _ from 'lodash';
import { Markdown } from 'react-markdown-reader';

class MarkdownView extends React.PureComponent {
  render() {
    return <Markdown {...this.props} />;
  }
}

export default MarkdownView;
