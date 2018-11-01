import React from 'react';
import PropTypes from 'prop-types';
import clasNames from 'classnames';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';

import {
  Nav,
  Row,
  Col,
  IconButton,
  Button,
  Icon,
  ButtonToolbar,
  Dropdown,
  Tooltip,
  Whisper
} from 'rsuite';
import { design } from './SvgIcons';
import LanguageSwitchButton from './LanguageSwitchButton';

const style = {
  iconSvg: {
    fill: '#8e8e93'
  }
};

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
    const { locale } = this.context;
    const pathname = location.pathname.replace('/en/', '');
    const isEN = locale.id === 'en-US';
    const nextPathName = isEN ? `/${pathname}` : `/en${pathname}`;
    location.href = `${location.origin}${nextPathName}`;
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
                <Whisper
                  placement="bottom"
                  speaker={<Tooltip>{locale.common.design}</Tooltip>}
                >
                  <IconButton
                    appearance="subtle"
                    icon={<Icon icon={design} style={style.iconSvg} />}
                    target="_blank"
                    href={`/design/index.html#${designHash}`}
                  />
                </Whisper>
              ) : null}
              {routerId ? (
                <Whisper
                  placement="bottom"
                  speaker={<Tooltip>{locale.common.edit}</Tooltip>}
                >
                  <IconButton
                    appearance="subtle"
                    icon={<Icon icon="edit2" />}
                    target="_blank"
                    href={`https://github.com/rsuite/rsuite.github.io/edit/master/src/${routerId}/index.md`}
                  />
                </Whisper>
              ) : null}

              <Whisper
                placement="bottom"
                speaker={<Tooltip>{locale.common.newIssues}</Tooltip>}
              >
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon="bug" />}
                  target="_blank"
                  href={' https://github.com/rsuite/rsuite/issues/new'}
                />
              </Whisper>

              <Whisper
                placement="bottom"
                speaker={<Tooltip>{locale.common.changeLanguage}</Tooltip>}
              >
                <LanguageSwitchButton
                  language={locale.id}
                  onClick={this.handleChangeLanguage}
                />
              </Whisper>

              <Whisper
                placement="bottom"
                speaker={<Tooltip>{locale.common.collapseMenu}</Tooltip>}
              >
                <IconButton
                  appearance="subtle"
                  icon={<Icon icon="bars" />}
                  onClick={this.handleNavicon}
                />
              </Whisper>
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
