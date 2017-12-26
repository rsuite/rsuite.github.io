import React from 'react';
import { Link } from 'react-router';
import { Button, Icon } from '../rsuiteSource';
import Logo from './Logo';
import { guide, component, tools } from './SvgIcons';


class TopLevelNav extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="top-level-nav">
        <Link to="/">
          <Logo width={26} className="white-logo" />
        </Link>

        <div className="top-level-nav-menu">
          <Button className="icon-btn-circle" componentClass={Link} to="/getting-started/installation">
            <Icon icon={guide} width={22} fill="#fff" />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/components/button">
            <Icon icon={component}  width={22} fill="#fff" />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/components/button">
            <Icon icon={tools}  width={22} fill="#fff" />
          </Button>
        </div>

        {children}
      </div>
    );
  }
}

export default TopLevelNav;
