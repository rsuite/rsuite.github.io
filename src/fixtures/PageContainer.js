import React from 'react';
import clasNames from 'classnames';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';

import { Nav, Row, Col, IconButton, Icon, ButtonToolbar, Dropdown } from '../rsuiteSource';
import { design } from './SvgIcons';
import { getDict } from '../locales';

const dict = getDict();

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
                  title={dict.common.design}
                  href={`/design/index.html#${designHash}`}
                />
              ) : null}
              {routerId ? (
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon="edit2" />}
                  target="_blank"
                  title={dict.common.edit}
                  href={`https://github.com/rsuite/rsuite.github.io/edit/master/src/${routerId}/index.md`}
                />
              ) : null}

              <IconButton
                appearance="subtle"
                title={dict.common.newIssues}
                icon={<Icon icon="bug" />}
                target="_blank"
                href={' https://github.com/rsuite/rsuite/issues/new'}
              />
              {/**
              <Dropdown
                title="New"
                placement="bottomRight"
                renderTitle={children => {
                  return <IconButton appearance="subtle" icon={<Icon icon="globe" />} />;
                }}
              >
                <Dropdown.Item eventKey="zh">简体中文</Dropdown.Item>
                <Dropdown.Item eventKey="en">English</Dropdown.Item>
              </Dropdown>

              **/}

              <IconButton
                appearance="subtle"
                title={dict.common.collapseMenu}
                icon={<Icon icon="bars" />}
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
