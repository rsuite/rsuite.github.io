
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from '../../rsuiteSource';
import { Markdown } from 'react-markdown-reader';

class InstallationPage extends React.Component {
  render() {
    return (
      <Content>
        <Row>
          <Col md={24}>
            <Markdown>
              {require('./index.md')}
            </Markdown>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default InstallationPage;
