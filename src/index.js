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
import LOCALE_ENV from './LOCALE_ENV';

function createRouters() {
  return menu.map(item => {
    const children = [];
    item.children.forEach(child => {
      if (!child.group && !child.target) {
        children.push(
          <Route
            key={child.id}
            path={child.id}
            component={require(`./${item.id}/${child.id}`)}
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
}

const AppWithRouter = () => (
  <Router history={browserHistory}>
    <Route path={LOCALE_ENV === 'en' ? '/en/' : '/'} component={App}>
      <IndexRoute component={Home} onEnter={defateTilte} />
      {createRouters()}
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
