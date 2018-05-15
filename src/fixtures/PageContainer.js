import React from 'react';
import PropTypes from 'prop-types';
import clasNames from 'classnames';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';

import { Nav, Row, Col, IconButton, Button, Icon, ButtonToolbar, Dropdown } from '../rsuiteSource';
import { design } from './SvgIcons';

class PageContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    locale: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      hideNav: props.hidePageNav || false
    };
  }
  handleNavicon = () => {
    this.setState({
      hideNav: !this.state.hideNav
    });
  };
  handleChangeLanguage = () => {
    const { locale, router } = this.context;
    const pathname = location.pathname.replace('/en/', '');
    const isEN = locale.id === 'en-US';
    const nextPathName = isEN ? `/${pathname}` : `/en${pathname}`;
    location.href = `${location.origin}${nextPathName}`;

    localStorage.setItem('localeKey', isEN ? 'zh' : 'en');
  };
  render() {
    const { children, designHash, routerId, hidePageNav, ...rest } = this.props;
    const { hideNav } = this.state;
    const { locale } = this.context;

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
                  title={locale.common.design}
                  href={`/design/index.html#${designHash}`}
                />
              ) : null}
              {routerId ? (
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon="edit2" />}
                  target="_blank"
                  title={locale.common.edit}
                  href={`https://github.com/rsuite/rsuite.github.io/edit/master/src/${routerId}/index.md`}
                />
              ) : null}

              <IconButton
                appearance="subtle"
                title={locale.common.newIssues}
                icon={<Icon icon="bug" />}
                target="_blank"
                href={' https://github.com/rsuite/rsuite/issues/new'}
              />

              <Button
                appearance="subtle"
                icon={<Icon icon="bars" />}
                onClick={this.handleChangeLanguage}
              >
                {locale.id === 'en-US' ? '中文' : 'EN'}
              </Button>

              <IconButton
                appearance="subtle"
                title={locale.common.collapseMenu}
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
