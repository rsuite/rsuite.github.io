import React from 'react';
import { Nav, Row, Col } from '../rsuiteSource';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';


class PageContainer extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <PageProvider {...props}>
        <Row>
          <Col md={9} xs={12} sm={12}>
            <PageContent>
              {children}
            </PageContent>
          </Col>
          <Col md={3} xsHidden smHidden>
            <PageNav
              width={200}
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