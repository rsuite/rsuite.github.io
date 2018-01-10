import React from 'react';
import { Nav, Row, Col } from '../rsuiteSource';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';


class PageContainer extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <PageProvider>
        <Row  {...props}>
          <Col md={12} xs={12} sm={12} className="main-container">
            <PageContent>
              {children}
            </PageContent>
          </Col>
          <Col md={2} xsHidden smHidden>
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