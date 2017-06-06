import React from 'react';
import { Text, Col } from 'rsuite';
import { Markdown } from '../../fixtures/Markdown';

export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <Markdown>
          {require('./index.md')}
        </Markdown>
      </Col>
    );
  }
});
