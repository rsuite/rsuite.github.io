import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';

class InstallationPage extends React.Component {
  render() {
    return (
      <Content>
        <Row>
          <Col md={24}>
            <MarkdownView>{require('./installation.md')}</MarkdownView>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default InstallationPage;
