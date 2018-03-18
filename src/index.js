import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  hashHistory,
  browserHistory
} from 'react-router';

// style
import './less/index.less';
import App from './App';
import Frame from './fixtures/Frame';
import Home from './Home';

import ready from './ready';
import menu from './fixtures/menu';

const routes = [];

menu.forEach(item => {
  const children = [];
  item.children.forEach(child => {
    !child.group &&
      children.push(
        <Route
          key={child.id}
          path={child.id}
          getComponents={(location, cb) => {
            let name = location.params.name;
            require.ensure([], require => {
              cb(null, require(`./${item.id}/${child.id}`));
            });
          }}
        />
      );
  });

  const route = (
    <Route key={item.id} path={item.id} component={Frame}>
      {children}
    </Route>
  );
  routes.push(route);
});

const mountApp = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {routes}
    </Route>
  </Router>
);

/*
if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
*/

ready(values => {
  render(mountApp, document.getElementById('root'));
});
