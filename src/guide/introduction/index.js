import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from '../../rsuiteSource';
import { Markdown } from 'react-markdown-reader';

class Page extends React.Component {
  render() {
    return (
      <Content>
        <Row>
          <Col md={12}>
            <Markdown>{require('./introduction.md')}</Markdown>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Page;
