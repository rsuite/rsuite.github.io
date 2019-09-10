import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Sidebar, Nav, Icon, IconButton } from 'rsuite';
import { Link } from 'react-router';
import _ from 'lodash';
import getMenu from '@/utils/getMenu';

class DocSidebar extends React.PureComponent {
  static contextTypes = {
    locale: PropTypes.object,
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      mediaSidebarShow: false
    };
  }

  getMenuItems() {
    const { locale } = this.context;
    return getMenu(locale);
  }

  getRootPath() {
    return _.get(this.context.router, 'routes.0.path');
  }

  handleOpenMediaSidebarShow = () => {
    this.setState({
      mediaSidebarShow: true
    });
  };

  handleCloseMediaSidebarShow = () => {
    this.setState({
      mediaSidebarShow: false
    });
  };

  render() {
    const nodeItems = [];
    const menuItems = this.getMenuItems();
    const rootPath = this.getRootPath();
    const { locale, router } = this.context;
    const showMediaToggleButton = this.props.style.width !== 0;
    const isActive = router.isActive;
    const menu = getMenu(locale);
    const { mediaSidebarShow } = this.state;

    const { name: activeTitle, icon } = menu.filter(({ id }) =>
      isActive(`${rootPath}${id}`)
    )[0];

    menuItems
      .filter(({ id }) => this.context.router.isActive(`${rootPath}${id}`))
      .map((item, key) => {
        if (item.children) {
          item.children.map((child, index) => {
            const pathname = child.url
              ? child.url
              : `${rootPath}${item.id}/${child.id}`;
            const active = this.context.router.isActive({ pathname });

            if (child.group) {
              nodeItems.push(
                <Nav.Item panel key={child.id}>
                  # {child.name}
                </Nav.Item>
              );
              return;
            }

            const title =
              _.get(locale, 'id') === 'en-US' || !child.title ? null : (
                <span className="title-zh">{child.title}</span>
              );

            if (child.target === '_blank' && child.url) {
              nodeItems.push(
                <Nav.Item key={child.id} href={child.url} target="_blank">
                  {child.name} {title}
                  <Icon icon="external-link-square" className="external-link" />
                </Nav.Item>
              );
            } else {
              nodeItems.push(
                <Nav.Item
                  key={child.id}
                  componentClass={Link}
                  to={pathname}
                  active={active}
                >
                  {child.name}
                  {title}
                </Nav.Item>
              );
            }
          });
        }
      });

    return (
      <>
        {showMediaToggleButton && (
          <IconButton
            className="media-toggle-side-bar"
            icon={<Icon icon="bars" />}
            onClick={this.handleOpenMediaSidebarShow}
          />
        )}
        <div
          className={classnames('rs-sidebar-wrapper fixed', {
            'media-sidebar-show': mediaSidebarShow
          })}
          onClick={this.handleCloseMediaSidebarShow}
          {...this.props}
        >
          <Sidebar>
            <IconButton
              className="media-close-side-bar-button"
              icon={<Icon icon="close" />}
              onClick={this.handleCloseMediaSidebarShow}
            />
            <div className="title-wrapper">
              {icon} {activeTitle}
            </div>
            <Nav className="nav-docs" vertical>
              {nodeItems}
            </Nav>
          </Sidebar>
        </div>
        <div
          className={classnames('rs-sidebar-media-backdrop', {
            'media-sidebar-show': mediaSidebarShow
          })}
          onClick={this.handleCloseMediaSidebarShow}
        />
      </>
    );
  }
}

export default DocSidebar;
