import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { IntlProvider } from 'rsuite-intl';

import App from './App';
import Home from './Home';
import PageLoader from './fixtures/PageLoader';

import ready from './ready';
import { defateTilte } from './title';
import { createRouters } from './routers';
import { getDict } from './locales';

if (__DEV__) {
  require('./less/index-dev.less');
} else {
  require('./less/index.less');
}

export default locale => {
  class AppRouters extends React.Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      const { onEnter, onEntered, onRemoveLoading } = this.props;
      return (
        <IntlProvider locale={getDict(locale)}>
          <Router history={DEPLOY_ENV === 'gitee' ? hashHistory : browserHistory}>
            <Route
              path={locale === 'en' ? '/en/' : '/'}
              component={props => <App {...props} onRemoveLoading={onRemoveLoading} />}
            >
              <IndexRoute component={Home} onEnter={defateTilte} />
              {createRouters(locale, onEnter, onEntered)}
            </Route>
          </Router>
        </IntlProvider>
      );
    }
  }

  class AppWithRouter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Enter: false
      };
    }

    handleEnter = () => {
      this.setState({
        Enter: true
      });
    };
    handleEntered = () => {
      this.setState({
        Enter: false
      });
    };
    render() {
      const { onRemoveLoading } = this.props;
      const { Enter } = this.state;

      return (
        <div>
          <PageLoader show={Enter} />
          <AppRouters
            onRemoveLoading={onRemoveLoading}
            onEnter={this.handleEnter}
            onEntered={this.handleEntered}
          />
        </div>
      );
    }
  }

  const hotRender = Component => {
    ReactDOM.render(<Component />, document.getElementById('root'));
  };

  ready((values, callback) => {
    hotRender(hot(module)(() => <AppWithRouter onRemoveLoading={callback} />));
  });
};
