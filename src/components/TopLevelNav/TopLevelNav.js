import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';
import { Button, Icon, Whisper, Tooltip } from 'rsuite';
import { isMobile } from 'react-device-detect';
import Logo from '@/components/Logo';
import {
  guide,
  component,
  tools,
  search,
  design,
  extension,
  gitee,
  lightOn,
  lightOff
} from '@/components/SvgIcons';
import SearchDrawer from '@/components/SearchDrawer';
import loadCssFile from '@/utils/loadCssFile';

function WithTooltipButton({ children, tip, ...props }) {
  if (isMobile) {
    return (
      <Button size="lg" {...props}>
        {children}
      </Button>
    );
  }
  return (
    <Whisper
      speaker={<Tooltip>{tip}</Tooltip>}
      placement="right"
      trigger="hover"
    >
      <Button size="lg" {...props}>
        {children}
      </Button>
    </Whisper>
  );
}

const iconColor = '#fff';

const svgStyle = {
  fill: iconColor
};

class TopLevelNav extends React.Component {
  static contextTypes = {
    locale: PropTypes.object,
    router: PropTypes.object.isRequired
  };

  static propTypes = {
    showSubmenu: PropTypes.bool,
    onToggleMenu: PropTypes.func,
    onChangeTheme: PropTypes.func,
    hideToggle: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      light: localStorage.getItem('theme') === 'dark' ? false : true,
      search: false
    };
  }

  showSearchDrawer = () => {
    this.setState({ search: true });
  };
  hideSearchDrawer = () => {
    this.setState({ search: false });
  };
  handleToggleMenu = (event, show) => {
    const { onToggleMenu } = this.props;
    onToggleMenu && onToggleMenu(show);
  };

  loadTheme = themeName => {
    localStorage.setItem('theme', themeName);
    const { globalVars = {} } = window.less || {};
    window.less &&
      window.less.modifyVars({
        ...globalVars,
        '@theme-is-default': themeName === 'default'
      });

    const themeId = `theme-${themeName}`;
    loadCssFile(`/resources/css/theme-${themeName}.css`, themeId).then(() => {
      Array.from(document.querySelectorAll('[id^=theme]')).forEach(css => {
        if (css.id !== themeId) {
          css.remove();
        }
      });
    });
  };

  handleToggleThemeButtonClick = () => {
    const { light } = this.state;
    const { onChangeTheme } = this.props;
    this.setState({ light: !light }, () => {
      const themeName = this.state.light ? 'default' : 'dark';
      this.loadTheme(themeName);
      onChangeTheme && onChangeTheme(themeName);
    });
  };

  render() {
    const { children, showSubmenu, hideToggle } = this.props;
    const { router, locale } = this.context;
    const localePath = _.get(locale, 'id') === 'en-US' ? '/en/' : '/';
    const { light } = this.state;
    const menu = [
      {
        key: 'guide',
        tip: _.get(locale, 'common.guide'),
        to: `${localePath}guide/introduction`,
        icon: guide
      },
      {
        key: 'components',
        tip: _.get(locale, 'common.components'),
        to: `${localePath}components/overview`,
        icon: component
      },

      {
        key: 'tools',
        tip: _.get(locale, 'common.tools'),
        to: `${localePath}tools/palette`,
        icon: tools
      },
      {
        key: 'extensions',
        tip: _.get(locale, 'common.extension'),
        to: `${localePath}extensions`,
        icon: extension
      }
    ];
    const renderSearchButton = className => (
      <WithTooltipButton
        tip={_.get(locale, 'common.search')}
        className={`icon-btn-circle ${className}`}
        onClick={this.showSearchDrawer}
      >
        <Icon icon={search} svgStyle={svgStyle} size="lg" />
      </WithTooltipButton>
    );

    return (
      <div className="top-level-nav">
        <Link to={`${localePath}`}>
          <Logo width={26} className="logo-sm" />
        </Link>

        <div className="top-level-nav-menu">
          {renderSearchButton('visible-xs')}

          {menu.map(item => (
            <WithTooltipButton
              tip={item.tip}
              key={item.key}
              className="icon-btn-circle"
              componentClass={Link}
              to={item.to}
              onClick={event => {
                this.handleToggleMenu(event, true);
              }}
            >
              <Icon
                icon={item.icon}
                svgStyle={{
                  ...svgStyle,
                  fill: router.isActive({ pathname: item.key })
                    ? '#169de0'
                    : iconColor
                }}
                size="lg"
              />
            </WithTooltipButton>
          ))}

          <WithTooltipButton
            tip={_.get(locale, 'common.design')}
            className="icon-btn-circle"
            componentClass="a"
            target="_blank"
            href="/design/default/index.html"
          >
            <Icon icon={design} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          {renderSearchButton('hidden-xs')}

          <div className="nav-menu-bottom">
            <WithTooltipButton
              tip="Toggle light/dark theme"
              className="icon-btn-circle"
              onClick={this.handleToggleThemeButtonClick}
            >
              <Icon
                icon={light ? lightOff : lightOn}
                svgStyle={svgStyle}
                size="lg"
              />
            </WithTooltipButton>

            <WithTooltipButton
              tip="GitHub"
              className="icon-btn-circle"
              href="https://github.com/rsuite/rsuite"
              target="_blank"
            >
              <Icon icon="github" size="lg" style={{ color: iconColor }} />
            </WithTooltipButton>

            <WithTooltipButton
              tip="码云"
              className="icon-btn-circle"
              href="https://gitee.com/rsuite/rsuite"
              target="_blank"
            >
              <Icon icon={gitee} svgStyle={svgStyle} size="lg" />
            </WithTooltipButton>

            {hideToggle ? null : (
              <WithTooltipButton
                tip={
                  showSubmenu
                    ? _.get(locale, 'common.closeMenu')
                    : _.get(locale, 'common.openMenu')
                }
                className="icon-btn-circle"
                onClick={this.handleToggleMenu}
              >
                <Icon
                  icon={showSubmenu ? 'angle-left' : 'angle-right'}
                  size="lg"
                />
              </WithTooltipButton>
            )}
          </div>
        </div>
        {children}
        <SearchDrawer show={this.state.search} onHide={this.hideSearchDrawer} />
      </div>
    );
  }
}

export default TopLevelNav;
