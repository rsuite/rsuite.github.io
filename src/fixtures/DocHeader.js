import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { scrollTop, on } from 'dom-lib';
import { Router, Route, Link } from 'react-router';
import { Header, Navbar, Nav, IconFont } from 'rsuite';
import RSuiteLogo from '../public/RSuiteLogo';


const NAV_LINKS = [{
  link: '/',
  title: '首页'
}, {
  link: '/getting-started',
  title: '介绍'
}, {
  link: '/components',
  title: '组件'
}, {
  link: '/examples',
  title: '实践'
}];

const propTypes = {
  activePage: PropTypes.string
};

const contextTypes = {
  router: PropTypes.object.isRequired
};

class DocHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      overflow: false
    };
  }

  componentDidMount() {
    this._onWindowScrollListener = on(window, 'scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    if (this._onWindowScrollListener) {
      this._onWindowScrollListener.off();
    }
  }

  handleWindowScroll = () => {

    if (scrollTop(window) > 30) {
      this.setState({
        overflow: true
      });
      return;
    }

    this.setState({
      overflow: false
    });
  }

  render() {

    let links = NAV_LINKS.map((nav, index) => {
      let isActive = this.context.router.isActive({ pathname: nav.link }) && (nav.link !== '/');
      return (
        <li className={isActive ? 'active' : null} key={index}>
          <Link className="hvr-underline-from-center" to={nav.link}>{nav.title}</Link>
        </li>
      );
    });

    let classes = classNames({
      'doc-header': true,
      'overflow': this.state.overflow
    });

    return (
      <Header className={classes}>
        <div className="container">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <RSuiteLogo width={142} height={32} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
              {links}
              <Nav.Item className="hvr-underline-from-center" target="_blank" href="https://github.com/rsuite/rsuite">
                GitHub
                <IconFont icon="external-link" className="external-link" />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Header>
    );
  }
}

DocHeader.propTypes = propTypes;
DocHeader.contextTypes = contextTypes;
export default DocHeader;
