import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Button, Icon, IconButton, Whisper, Tooltip } from 'rsuite';
import Logo from './Logo';
import {
  guide,
  component,
  tools,
  search,
  design,
  extension,
  lightbulb,
  lightbulbOn,
  gitee
} from './SvgIcons';
import SearchDrawer from './SearchDrawer';

function WithTooltipButton({ children, tip, ...props }) {
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

const svgStyle = {
  fill: '#fff'
};

class TopLevelNav extends React.Component {
  static contextTypes = {
    showSubmenu: PropTypes.bool,
    onToggleMenu: PropTypes.func,
    locale: PropTypes.object,
    router: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
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
    onToggleMenu(show);
  };
  render() {
    const { children, showSubmenu } = this.props;
    const { router, locale } = this.context;
    const localePath = _.get(locale, 'id') === 'en-US' ? '/en/' : '/';

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

    return (
      <div className="top-level-nav">
        <Link to={`${localePath}`}>
          <Logo width={26} className="logo-sm" />
        </Link>

        <div className="top-level-nav-menu">
          <WithTooltipButton
            tip={_.get(locale, 'common.search')}
            className="icon-btn-circle"
            onClick={this.showSearchDrawer}
          >
            <Icon icon={search} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <WithTooltipButton
            tip={_.get(locale, 'common.design')}
            className="icon-btn-circle"
            componentClass="a"
            target="_blank"
            href="/design/index.html"
          >
            <Icon icon={design} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

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
                    ? '#34c3ff'
                    : '#fff'
                }}
                size="lg"
              />
            </WithTooltipButton>
          ))}

          <div className="nav-menu-bottom">
            <WithTooltipButton
              tip="GitHub"
              className="icon-btn-circle"
              href="https://github.com/rsuite/rsuite"
              target="_blank"
            >
              <Icon icon="github" size="lg" />
            </WithTooltipButton>

            <WithTooltipButton
              tip="码云"
              className="icon-btn-circle"
              href="https://gitee.com/rsuite/rsuite"
              target="_blank"
            >
              <Icon icon={gitee} svgStyle={svgStyle} size="lg" />
            </WithTooltipButton>

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
          </div>
        </div>
        {children}
        <SearchDrawer show={this.state.search} onHide={this.hideSearchDrawer} />
      </div>
    );
  }
}

export default TopLevelNav;
