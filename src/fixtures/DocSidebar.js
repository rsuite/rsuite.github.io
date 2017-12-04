import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Nav, IconFont, FormControl } from 'rsuite';
import { Link } from 'react-router';
import _ from 'lodash';

import components from '../public/componentList';


function filterNodesOfTree(data, check) {

  const findNodes = (nodes = []) => {
    return nodes.filter((item) => {
      if (_.isArray(item.components)) {
        const nextChildren = findNodes(item.components);
        if (nextChildren && nextChildren.length) {
          item.components = nextChildren;
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
  getBaseComponents() {
    const { menu } = this.props;
    const { keyword } = this.state;
    const key = _.trim(keyword.toLocaleLowerCase());
    return filterNodesOfTree(_.cloneDeep(menu), (item) => {
      if (!item.id) {
        return false;
      }
      return item.id.indexOf(key) >= 0 || item.title.indexOf(key) >= 0;
    }) || [];
  }
  render() {
    const { children } = this.props;
    const { keyword } = this.state;
    const nodeItems = [];
    const baseComponents = this.getBaseComponents();

    baseComponents.map((item, key) => {

      nodeItems.push(
        <li key={key} className="nav-header">
          {item.category}
        </li>
      );

      item.components.map((child, index) => {
        const pathname = child.url ? child.url : `/components/${child.id}`;
        const active = this.context.router.isActive({ pathname });
        const item = child.url
          ? <Nav.Item key={index} componentClass="a" target="_blank" href={pathname} active={active}>
            {child.name}
            <span className="nav-chinese">{child.title}</span>
          </Nav.Item>
          : <Nav.Item key={index} componentClass={Link} to={pathname} active={active}>
            {child.name}
            <span className="nav-chinese">{child.title}</span>
          </Nav.Item>;
        nodeItems.push(item);
      });
    });


    const items = components.filter((item, index) => {
      let tags = item.tags || [];
      return tags.some((tag) => {
        return tag.indexOf(_.trim(keyword.toLocaleLowerCase())) >= 0;
      }) && index !== 0;
    });

    return (
      <Sidebar>

        {children}
        <FormControl
          placeholder="搜索组件..."
          className="search-input"
          onChange={_.debounce(this.handleSearch, 400)}
        />
        <Nav className="nav-docs">
          {nodeItems}
          {
            items.length ? (
              <li className="nav-header">扩展组件</li>
            ) : null
          }
          {
            items.map((item, index) => {

              return (
                <li key={index}>
                  <a target="_blank" href={item.url}>
                    <i className={item.icon}></i>{' '}
                    {item.name}
                    <IconFont icon="external-link" className="external-link" />
                  </a>
                </li>
              );
            })
          }
        </Nav>
      </Sidebar>
    );
  }
}

DocSidebar.contextTypes = contextTypes;

export default DocSidebar;
