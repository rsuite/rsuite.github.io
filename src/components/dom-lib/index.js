import React from 'react';
import { Text, Col } from 'rsuite';
import { Markdown } from '../../fixtures/Markdown';

class DomLib extends React.Component {
  render() {
    return (
      <Col md={9} sm={12}>
        <Markdown>
          {require('./index.md')}
        </Markdown>
      </Col>
    );
  }
};



export default DomLib;