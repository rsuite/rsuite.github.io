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

require('./hypers-hire');

import App from './App';

// Pages
import PageIndex from './pages/PageIndex';
import PageGettingStarted from './pages/PageGettingStarted';
import PageComponents from './pages/PageComponents';
import PageExamples from './pages/PageExamples';

import ready from './ready';
import componentOptions from './components/options';

const componentContainer = (location, cb) => {

  require.ensure([], require => {
    cb(null, require(`./components/${name}`));
  }, 'components');

};

const routes = [];
componentOptions.forEach(element => {
  element.components.forEach(com => {
    routes.push(
      <Route key={com.id} path={com.id} getComponent={(location, cb) => {
        let name = location.params.name;
        require.ensure([], require => {
          cb(null, require(`./components/${com.id}`));
        });
      }}
      />
    );
  });
});



const history = process.env.NODE_ENV === 'production' ? browserHistory : hashHistory;
const mountApp = (
  <Router history={history}>

    <Route path="/" component={App}>
      <IndexRoute component={PageIndex} />
      <Route path="getting-started" component={PageGettingStarted} />
      <Route path="examples" component={PageExamples} />
      <Route path="components" component={PageComponents}>

        {routes}
        <IndexRedirect to="buttons" />
      </Route>
    </Route>

  </Router>
);

ready((values) => {
  render(mountApp, document.getElementById('root'));
});


