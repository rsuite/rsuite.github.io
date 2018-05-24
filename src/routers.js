import React from 'react';
import { Route } from 'react-router';

import Frame from './fixtures/Frame';
import { getMenu } from './fixtures/menu';
import { getDict } from './locales';
import { setTitle } from './title';

export const createRouters = (locale, onEnter, onEntered) => {
  const menu = getMenu(getDict(locale));

  return menu.map(item => {
    const children = [];
    item.children.forEach(child => {
      if (!child.group && !child.target) {
        children.push(
          <Route
            key={child.id}
            path={child.id}
            getComponents={(location, callback) => {
              onEnter && onEnter();
              require.ensure([], require => {
                const getComponent = require(`./${item.id}/${child.id}`)['default'];
                const component = getComponent(locale);
                callback && callback(null, component);
                onEntered && onEntered();
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
