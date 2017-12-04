import React from 'react';
import { Header, Navbar, Nav, Row, Col } from 'rsuite';
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
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <SwitchNav activeKey={activeKey} />
                </Nav>
                <Nav pullRight>
                  <Nav.Item href={githubURL}>GitHub</Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Header>

          <div className="container-fluid">
            <Row>
              <Col md={3} xsHidden smHidden>
                <PageNav width={200} />
              </Col>
              <Col md={8} xs={12} sm={12}>
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