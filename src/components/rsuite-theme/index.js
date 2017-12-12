import React from 'react';
import { Text, Col } from '../../rsuiteSource';
import { Markdown } from 'react-markdown-reader';


class RSuiteTheme extends React.Component {
  render() {
    return (
      <Col md={9} sm={12}>
        <Markdown>
          {require('./index.md')}
        </Markdown>
      </Col>
    );
  }
}

export default RSuiteTheme;