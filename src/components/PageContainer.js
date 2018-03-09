import React from 'react';
import clasNames from 'classnames';
import { Nav, Row, Col, IconButton, Icon } from '../rsuiteSource';
import { PageProvider, PageNav, PageContent } from '../fixtures/PageNav';

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNav: false
    };
  }
  handleNavicon = () => {
    this.setState({
      hideNav: !this.state.hideNav
    });
  };
  render() {
    const { children, ...rest } = this.props;
    const { hideNav } = this.state;
    return (
      <PageProvider>
        <Row {...rest} className={clasNames({ ['hide-page-nav']: hideNav })}>
          <Col md={24} xs={24} sm={24} className="main-container">
            <PageContent>{children}</PageContent>
          </Col>
          <Col md={8} xsHidden smHidden>
            <IconButton
              className="menu-button"
              icon={<Icon icon="navicon" />}
              onClick={this.handleNavicon}
            />
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
