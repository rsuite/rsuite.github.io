import React from 'react';
import { Header, Navbar, Nav, Row, Col } from '../rsuiteSource';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';
import RSuiteLogo from './RSuiteLogo';
import SwitchNav from './SwitchNav';

class PageContainer extends React.Component {

  render() {

    const {
      children,
      githubURL,
      activeKey
    } = this.props;

    return (
      <PageProvider>
        <div className="doc-page">
          <Header inverse>
            <div className="container-fluid">
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">
                    <RSuiteLogo color="#fff" width={90} />
                  </a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Body>
                <Nav>
                  <SwitchNav activeKey={activeKey} />
                </Nav>
                <Nav pullRight>
                  <Nav.Item href={githubURL}>GitHub</Nav.Item>
                </Nav>
              </Navbar.Body>
            </div>
          </Header>

          <div className="container-fluid">
            <Row>
              <Col md={6} xsHidden smHidden>
                <PageNav width={200} offset={{ top: 70, left: 30 }} />
              </Col>
              <Col md={16} xs={24} sm={24}>
                <PageContent>
                  {children}
                </PageContent>
              </Col>
            </Row>
          </div>
        </div>
      </PageProvider>
    );
  }
}

export default PageContainer;