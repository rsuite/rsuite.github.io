import React from 'react';
import { Nav } from 'rsuite';

import componentList from './componentList';

export default ({ activeKey }) => {

  return (
    <Nav.Dropdown className="switch-nav-menu" activeKey={activeKey} select >
      {
        componentList.map(item => (
          <Nav.Item key={item.repoName} eventKey={item.name} href={item.url} >
            <i className={item.icon} /> {' '}
            {item.name}
          </Nav.Item>
        ))
      }
    </Nav.Dropdown>
  );
};