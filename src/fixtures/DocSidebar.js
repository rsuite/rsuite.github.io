import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Nav, Icon, FormControl } from 'rsuite';
import { Link } from 'react-router';
import _ from 'lodash';
import { getMenu } from './menu';

function filterNodesOfTree(data, check) {
  const findNodes = (nodes = []) => {
    return nodes.filter(item => {
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

class DocSidebar extends React.Component {
  static contextTypes = {
    locale: PropTypes.object,
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  getMenuItems() {
    const { keyword } = this.state;
    const key = _.trim(keyword.toLocaleLowerCase());
    const { locale } = this.context;
    const menu = getMenu(locale);
    return (
      filterNodesOfTree(_.cloneDeep(menu), item => {
        if (!item.id) {
          return false;
        }
        return item.id.indexOf(key) >= 0 || item.name.indexOf(key) >= 0;
      }) || []
    );
  }
  getRootPath() {
    return _.get(this.context.router, 'routes.0.path');
  }

  render() {
    const nodeItems = [];
    const menuItems = this.getMenuItems();
    const rootPath = this.getRootPath();
    const { locale, router } = this.context;
    const isActive = router.isActive;
    const menu = getMenu(locale);

    const { name: activeTitle, icon } = menu.filter(({ id }) => isActive(`${rootPath}${id}`))[0];

    menuItems
      .filter(({ id }) => this.context.router.isActive(`${rootPath}${id}`))
      .map((item, key) => {
        item.children.map((child, index) => {
          const pathname = child.url ? child.url : `${rootPath}${item.id}/${child.id}`;
          const active = this.context.router.isActive({ pathname });

          if (child.group) {
            nodeItems.push(
              <Nav.Item panel key={child.id}>
                {child.name}
              </Nav.Item>
            );
            return;
          }

          const title =
            locale.id === 'en-US' ? null : <span className="title-zh">{child.title}</span>;

          if (child.target === '_blank' && child.url) {
            nodeItems.push(
              <Nav.Item key={child.id} href={child.url} target="_blank">
                {child.name} {title}
                <Icon icon="external-link" className="external-link" />
              </Nav.Item>
            );
          } else {
            nodeItems.push(
              <Nav.Item key={child.id} componentClass={Link} to={pathname} active={active}>
                {child.name}
                {title}
              </Nav.Item>
            );
          }
        });
      });

    return (
      <div className="rs-sidebar-wrapper fixed" {...this.props}>
        <Sidebar>
          <div className="title-wrapper">
            {icon} {activeTitle}
          </div>
          <Nav className="nav-docs" vertical>
            {nodeItems}
          </Nav>
        </Sidebar>
      </div>
    );
  }
}

export default DocSidebar;
