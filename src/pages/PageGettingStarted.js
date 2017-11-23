
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';
import Markdown from '../fixtures/Markdown';

class PageGettingStarted extends React.Component {
  render() {
    return (
      <Content>
        <Row>
          <Col md={12}>
            <Markdown>
              {require('../../README.md')}
            </Markdown>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default PageGettingStarted;
