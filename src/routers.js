import React from 'react';
import { Route } from 'react-router';
import menu from './fixtures/menu';
import Frame from './fixtures/Frame';
import { setTitle } from './title';

export const createRouters = (locale, onEnter, onEntered) => {
  return menu.map(item => {
    const children = [];
    item.children.forEach(child => {
      if (!child.group && !child.target) {
        children.push(
          <Route
            key={child.id}
            path={child.id}
            getComponents={(location, callback) => {
              onEnter();
              require.ensure([], require => {
                const getComponent = require(`./${item.id}/${child.id}`)['default'];
                const component = getComponent(locale);
                callback(null, component);
                onEntered();
              });
            }}
            onEnter={() => {
              setTitle(`${child.name} - ${item.name}`);
            }}
          />
        );
      }
    });

    return (
      <Route key={item.id} path={item.id} component={Frame}>
        {children}
      </Route>
    );
  });
};
