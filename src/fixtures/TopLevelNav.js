import React from 'react';
import { Link } from 'react-router';
import { Button, IconFont } from '../rsuiteSource';
import Plug from './Plug';
import Logo from './Logo';

class TopLevelNav extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="top-level-nav">
        <Link to="/">
          <Logo width={40} className="white-logo" />
        </Link>

        <div className="top-level-nav-menu">
          <Button className="icon-btn-circle" componentClass={Link} to="/getting-started/installation">
            <IconFont icon="book2" />
          </Button>

          <Button className="icon-btn-circle" componentClass={Link} to="/components/buttons">
            <Plug width={22} height={17} color={'#fff'} />
          </Button>
        </div>

        {children}
      </div>
    );
  }
}

export default TopLevelNav;
