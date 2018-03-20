import React from 'react';
import { Content as PageContent, Row, Col } from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';

class Page extends React.Component {
  render() {
    return (
      <PageContent>
        <Row>
          <Col md={24}>
            <MarkdownView>{require('./index.md')}</MarkdownView>
          </Col>
        </Row>
      </PageContent>
    );
  }
}

export default Page;
