import React from 'react';
import classNames from 'classnames';
import { scrollTop, on } from 'dom-lib';
import { Router, Route, Link } from 'react-router';
import { Header, Navbar, Nav } from 'rsuite';
import logo from '../../resources/images/logo.svg';


const NAV_LINKS = [
  {
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



const DocHeader = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      overflow: false
    };
  },
  componentDidMount() {
    this._onWindowScrollListener = on(window, 'scroll', this.handleWindowScroll);
  },
  componentWillUnmount() {
    if (this._onWindowScrollListener) {
      this._onWindowScrollListener.off();
    }
  },
  handleWindowScroll() {

    if (scrollTop(window) > 30) {
      this.setState({
        overflow: true
      });
      return;
    }

    this.setState({
      overflow: false
    });
  },
  render() {

    let links = NAV_LINKS.map((nav, index) => {

      let isActive = this.context.router.isActive(nav.link) && (nav.link !== '/');

      return (
        <li className={isActive ? 'active' : null} key={index} >
          <Link to={nav.link}>{nav.title}</Link>
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
              <a href="#"><img height={32} src={logo} /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
              {links}
              <Nav.Item href="https://github.com/rsuite/rsuite">GitHub</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Header>
    );
  }
});

export default DocHeader;
