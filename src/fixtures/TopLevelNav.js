import React from 'react';
import { Link } from 'react-router';
import { Button, Icon, IconButton, Whisper, Tooltip } from '../rsuiteSource';
import Logo from './Logo';
import { guide, component, tools, search, lightbulb, lightbulbOn } from './SvgIcons';
import SearchDrawer from './SearchDrawer';


function WithTooltipButton({ children, tip, ...props }) {
  return (
    <Whisper speaker={<Tooltip>{tip}</Tooltip>} placement="right" trigger="hover">
      <Button {...props} >
        {children}
      </Button>
    </Whisper>
  );
}

class TopLevelNav extends React.Component {
  constructor() {
    super();
    this.state = {
      search: false
    };
  }
  showSearchDrawer = () => {
    this.setState({ search: true });
  }
  hideSearchDrawer = () => {
    this.setState({ search: false });
  }
  render() {
    const { children } = this.props;
    const svgStyle = {
      fill: '#fff'
    };

    return (
      <div className="top-level-nav">
        <Link to="/">
          <Logo width={26} className="logo-sm" />
        </Link>

        <div className="top-level-nav-menu">

          <WithTooltipButton tip="搜索" className="icon-btn-circle" onClick={this.showSearchDrawer} >
            <Icon icon={search} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <WithTooltipButton tip="新手指南" className="icon-btn-circle" componentClass={Link} to="/guide/installation">
            <Icon icon={guide} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <WithTooltipButton tip="组件" className="icon-btn-circle" componentClass={Link} to="/components/overview">
            <Icon icon={component} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <WithTooltipButton tip="工具" className="icon-btn-circle" componentClass={Link} to="/tools/palette">
            <Icon icon={tools} svgStyle={svgStyle} size="lg" />
          </WithTooltipButton>

          <div className="nav-menu-bottom">
            <WithTooltipButton tip="GitHub" className="icon-btn-circle" href="https://github.com/rsuite/rsuite">
              <Icon icon="github" size="lg" />
            </WithTooltipButton>
          </div>
        </div>
        {children}
        <SearchDrawer
          show={this.state.search}
          onHide={this.hideSearchDrawer}
        />
      </div>
    );
  }
}

export default TopLevelNav;
