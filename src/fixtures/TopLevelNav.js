import React from 'react';
import { Link } from 'react-router';
import { Button, Icon, IconButton } from '../rsuiteSource';
import Logo from './Logo';
import { guide, component, tools, search } from './SvgIcons';
import SearchDrawer from './SearchDrawer';


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
      width: 22,
      fill: '#fff'
    };

    return (
      <div className="top-level-nav">
        <Link to="/">
          <Logo width={26} className="white-logo" />
        </Link>

        <div className="top-level-nav-menu">

          <Button className="icon-btn-circle" onClick={this.showSearchDrawer} >
            <Icon icon={search} svgStyle={svgStyle} />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/getting-started/installation">
            <Icon icon={guide} svgStyle={svgStyle} />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/components/overview">
            <Icon icon={component} svgStyle={svgStyle} />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/tools/palette">
            <Icon icon={tools} svgStyle={svgStyle} />
          </Button>

          <Button className="icon-btn-circle" href="https://github.com/rsuite/rsuite">
            <Icon icon="github" />
          </Button>
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
