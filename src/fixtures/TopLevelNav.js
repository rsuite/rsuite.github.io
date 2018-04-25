import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Button, Icon, IconButton, Whisper, Tooltip } from '../rsuiteSource';
import Logo from './Logo';
import { guide, component, tools, search, design, lightbulb, lightbulbOn } from './SvgIcons';
import SearchDrawer from './SearchDrawer';

function WithTooltipButton({ children, tip, ...props }) {
  return (
    <Whisper speaker={<Tooltip>{tip}</Tooltip>} placement="right" trigger="hover">
      <Button size="lg" {...props}>
        {children}
      </Button>
    </Whisper>
  );
}

const svgStyle = {
  fill: '#fff'
};
const menu = [
  {
    key: 'guide',
    tip: '新手指南',
    to: '/guide/introduction',
    icon: guide
  },
  {
    key: 'components',
    tip: '组件',
    to: '/components/overview',
    icon: component
  },
  {
    key: 'tools',
    tip: '工具',
    to: '/tools/palette',
    icon: tools
  }
];

class TopLevelNav extends React.Component {
  static contextTypes = {
    showSubmenu: PropTypes.bool,
    onToggleMenu: PropTypes.func,
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
    const { router } = this.context;

    return (
      <div className="top-level-nav">
        <Link to="/">
          <Logo width={26} className="logo-sm" />
        </Link>

        <div className="top-level-nav-menu">
          <WithTooltipButton tip="搜索" className="icon-btn-circle" onClick={this.showSearchDrawer}>
            <Icon icon={search} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <WithTooltipButton
            tip="设计原型"
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
                  fill: router.isActive({ pathname: item.key }) ? '#34c3ff' : '#fff'
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
              tip={showSubmenu ? '收起菜单' : '展开菜单'}
              className="icon-btn-circle"
              onClick={this.handleToggleMenu}
            >
              <Icon icon={showSubmenu ? 'angle-left' : 'angle-right'} size="lg" />
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
