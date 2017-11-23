import React from 'react';
import { Sidebar, Navbar, Nav } from 'rsuite';
import { Link } from 'react-router';
import components from '../componentList';

class DocSidebar extends React.Component {

  render() {
    const { children, menu } = this.props;
    const nodeItems = [];
    menu.default.map((item, key) => {

      nodeItems.push(
        <li key={key} className="nav-header" >
          {item.category}
        </li>
      );

      item.components.map((child, index) => {
        const item = child.url
          ? <Nav.Item key={index} componentClass="a" target="_blank" href={child.url}>
            {child.name}
            <span className="nav-chinese">{child.title}</span>
          </Nav.Item>
          : <Nav.Item key={index} componentClass={Link} to={`/components/${child.id}`} >
            {child.name}
            <span className="nav-chinese">{child.title}</span>
          </Nav.Item>;
        nodeItems.push(item);
      });
    });

    return (
      <Sidebar >
        {children}
        <Nav className="nav-docs">
          {nodeItems}
          <li className="nav-header">扩展组件</li>
          {
            components.filter((item, index) => {
              return index !== 0;
            }).map((item, index) => {

              return (
                <li key={index}>
                  <a target="_blank" href={item.url}>
                    <i className={item.icon}></i>{' '}
                    {item.name}
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

export default DocSidebar;
