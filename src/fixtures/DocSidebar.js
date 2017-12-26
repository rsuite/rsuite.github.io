import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Nav, IconFont, FormControl } from '../rsuiteSource';
import { Link } from 'react-router';
import _ from 'lodash';

import menu from './menu';

function filterNodesOfTree(data, check) {

  const findNodes = (nodes = []) => {
    return nodes.filter((item) => {
      if (_.isArray(item.children)) {
        const nextChildren = findNodes(item.children);
        if (nextChildren && nextChildren.length) {
          item.children = nextChildren;
          return true;
        }
      }
      return check(item);
    });
  };
  return findNodes(data);
}

const contextTypes = {
  router: PropTypes.object.isRequired
};

class DocSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  handleSearch = (keyword) => {
    this.setState({ keyword });
  }

  getMenuItems() {
    const { keyword } = this.state;
    const key = _.trim(keyword.toLocaleLowerCase());
    return filterNodesOfTree(_.cloneDeep(menu), (item) => {
      if (!item.id) {
        return false;
      }
      return item.id.indexOf(key) >= 0 || item.name.indexOf(key) >= 0;
    }) || [];
  }

  render() {
    const nodeItems = [];
    const menuItems = this.getMenuItems();
    const { name: activeTitle, icon } = menu.filter(({ id }) => this.context.router.isActive(id))[0];
    menuItems.filter(({ id }) => this.context.router.isActive(id)).map((item, key) => {
      item.children.map((child, index) => {
        const pathname = child.url ? child.url : `/${item.id}/${child.id}`;
        const active = this.context.router.isActive({ pathname });
        const nav = (
          <Nav.Item key={index} componentClass={Link} to={pathname} active={active}>
            {child.name}
          </Nav.Item>
        );
        nodeItems.push(nav);
      });
    });

    return (
      <Sidebar className="fixed">
        <div className="title-wrapper">
          {icon} {activeTitle}
        </div>

        <FormControl
          placeholder="搜索..."
          className="search-input"
          onChange={_.debounce(this.handleSearch, 400)}
        />
        <Nav className="nav-docs">
          {nodeItems}
        </Nav>
      </Sidebar>
    );
  }
}

DocSidebar.contextTypes = contextTypes;

export default DocSidebar;
