
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';
import { Markdown } from 'react-markdown-reader';

class InstallationPage extends React.Component {
  render() {
    return (
      <Content>
        <Row>
          <Col md={12}>
            <Markdown>
              {require('./installation.md')}
            </Markdown>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default InstallationPage;
