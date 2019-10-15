import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PageProvider, PageNav, PageContent } from 'rsuite-page-nav';
import { on } from 'dom-lib';
import { ThemeContext } from '../Frame';

import {
  Row,
  Col,
  IconButton,
  Icon,
  ButtonToolbar,
  Tooltip,
  Whisper,
  Message
} from 'rsuite';
import { design } from '../SvgIcons';
import LanguageSwitchButton from '../LanguageSwitchButton';
import TypesDrawer from '../TypesDrawer';
import { DirectionContext } from '@/components/Context';

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
      hideNav: props.hidePageNav || false,
      showTypes: false
    };
  }
  documentListener = null;
  componentDidMount() {
    if (!this.documentListener) {
      this.documentListener = on(
        document,
        'click',
        this.handleDocumentClick,
        true
      );
    }
  }
  componentWillUnmount() {
    if (this.documentListener) {
      this.documentListener.off();
    }
  }
  handleDocumentClick = e => {
    const href = e.target.getAttribute('href');
    if (href === '#types') {
      e.stopPropagation();
      e.preventDefault();
      this.setState({
        showTypes: true
      });
    }
  };
  closeShowTypes = () => {
    this.setState({
      showTypes: false
    });
  };
  handleNavicon = () => {
    this.setState({
      hideNav: !this.state.hideNav
    });
  };
  getLocaleKey() {
    return this.context.locale.id;
  }
  handleChangeLanguage = () => {
    const pathname = location.pathname.replace('/en/', '');
    const isEN = this.getLocaleKey() === 'en-US';
    const nextPathName = isEN ? `/${pathname}` : `/en${pathname}`;
    location.href = `${location.origin}${nextPathName}`;
  };

  render() {
    const {
      children,
      designHash: designHashConfig = {},
      routerId,
      hidePageNav,
      ...rest
    } = this.props;
    const { hideNav } = this.state;
    const { locale } = this.context;
    return (
      <DirectionContext.Consumer>
        {({ direction }) => (
          <ThemeContext.Consumer>
            {({ theme }) => {
              const designHash = designHashConfig[theme];
              console.log(direction);
              return (
                <PageProvider>
                  <Row
                    {...rest}
                    className={classnames({ ['hide-page-nav']: hideNav })}
                  >
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
                              icon={
                                <Icon icon={design} style={style.iconSvg} />
                              }
                              target="_blank"
                              href={`/design/${theme}/index.html#artboard${designHash}`}
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
                            href={
                              ' https://github.com/rsuite/rsuite/issues/new'
                            }
                          />
                        </Whisper>

                        <Whisper
                          placement="bottom"
                          speaker={
                            <Tooltip>{locale.common.changeLanguage}</Tooltip>
                          }
                        >
                          <LanguageSwitchButton
                            language={locale.id}
                            onClick={this.handleChangeLanguage}
                          />
                        </Whisper>

                        <Whisper
                          placement="bottom"
                          speaker={
                            <Tooltip>{locale.common.collapseMenu}</Tooltip>
                          }
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
                        offset={{
                          top: 80,
                          [direction === 'rtl' ? 'left' : 'right']: 10
                        }}
                      />
                    </Col>
                  </Row>
                  <TypesDrawer
                    onHide={this.closeShowTypes}
                    show={this.state.showTypes}
                  />
                </PageProvider>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </DirectionContext.Consumer>
    );
  }
}

export default PageContainer;
