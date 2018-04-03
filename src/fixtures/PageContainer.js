import React from 'react';
import clasNames from 'classnames';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';

import { Nav, Row, Col, IconButton, Icon, ButtonToolbar } from '../rsuiteSource';
import { design } from './SvgIcons';

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
    const { children, designHash, routerId, ...rest } = this.props;
    const { hideNav } = this.state;

    return (
      <PageProvider>
        <Row {...rest} className={clasNames({ ['hide-page-nav']: hideNav })}>
          <Col md={24} xs={24} sm={24} className="main-container">
            <PageContent>{children}</PageContent>
          </Col>
          <Col md={8} xsHidden smHidden>
            <ButtonToolbar className="menu-button">
              {designHash ? (
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon={design} />}
                  target="_blank"
                  title="设计原型"
                  href={`/design/index.html#${designHash}`}
                />
              ) : null}
              {routerId ? (
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon="edit2" />}
                  target="_blank"
                  title="编辑当前页面"
                  href={`https://github.com/rsuite/rsuite.github.io/edit/next/src/${routerId}/index.md`}
                />
              ) : null}

              <IconButton
                appearance="subtle"
                title="折叠菜单"
                icon={<Icon icon="navicon" />}
                onClick={this.handleNavicon}
              />
            </ButtonToolbar>
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
