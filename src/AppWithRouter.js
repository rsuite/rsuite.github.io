import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { IntlProvider } from 'rsuite-intl';

import App from './App';
import Home from './Home';

import ready from './ready';
import { defateTilte } from './title';
import { createRouters } from './routers';
import { getDict } from './locales';

export default locale => {
  const AppWithRouter = () => (
    <IntlProvider locale={getDict(locale)}>
      <Router history={browserHistory}>
        <Route path={locale === 'en' ? '/en/' : '/'} component={App}>
          <IndexRoute component={Home} onEnter={defateTilte} />
          {createRouters(locale)}
        </Route>
      </Router>
    </IntlProvider>
  );

  const hotRender = Component => {
    ReactDOM.render(<Component />, document.getElementById('root'));
  };

  ready(values => {
    hotRender(hot(module)(AppWithRouter));
  });
};
