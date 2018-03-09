import React from 'react';
import { Nav, Row, Col } from '../rsuiteSource';
import { PageProvider, PageNav, PageContent } from '../fixtures/PageNav';

class PageContainer extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <PageProvider>
        <Row {...rest}>
          <Col md={24} xs={24} sm={24} className="main-container">
            <PageContent>{children}</PageContent>
          </Col>
          <Col md={8} xsHidden smHidden>
            <PageNav
              showOrderNumber={false}
              width={150}
              scrollBar="left"
              offset={{ top: 60, right: 30 }}
            />
          </Col>
        </Row>
      </PageProvider>
    );
  }
}

export default PageContainer;
