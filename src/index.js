import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
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
import { setTitle, defateTilte } from './title';
import menu from './fixtures/menu';

const routes = menu.map(item => {
  const children = [];
  item.children.forEach(child => {
    !child.group &&
      children.push(
        <Route
          key={child.id}
          path={child.id}
          getComponents={(location, resolve) => {
            require.ensure([], require => {
              resolve(null, require(`./${item.id}/${child.id}`));
              setTitle(`${child.title || ''} ${child.name} - ${item.name}`);
            });
          }}
        />
      );
  });

  return (
    <Route key={item.id} path={item.id} component={Frame}>
      {children}
    </Route>
  );
});

const AppWithRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={defateTilte} />
      {routes}
    </Route>
  </Router>
);

/*
if (__DEV__) {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
*/

const hotRender = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

ready(values => {
  hotRender(hot(module)(AppWithRouter));
});
