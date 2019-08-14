import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  hashHistory
} from 'react-router';
import { IntlProvider } from 'rsuite-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';

import App from './App';
import HomePage from './pages/home';
import PageLoader from './components/PageLoader';

import ready from './ready';
import { defateTilte } from './title';
import { createRouters } from './pages/routers';
import { getDict } from './locales';
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN';
import enUS from 'rsuite/lib/IntlProvider/locales/en_US';

export default locale => {
  class AppRouters extends React.Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      const { onEnter, onEntered, onRemoveLoading } = this.props;
      return (
        <IntlProvider locale={getDict(locale)}>
          <RSIntlProvider locale={locale === 'en' ? enUS : zhCN}>
            <Router
              history={DEPLOY_ENV === 'gitee' ? hashHistory : browserHistory}
            >
              <Route
                path={locale === 'en' ? '/en/' : '/'}
                component={props => (
                  <App {...props} onRemoveLoading={onRemoveLoading} />
                )}
              >
                <IndexRoute component={HomePage} onEnter={defateTilte} />
                {createRouters(locale, onEnter, onEntered)}
              </Route>
            </Router>
          </RSIntlProvider>
        </IntlProvider>
      );
    }
  }

  class AppWithRouter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        enter: false
      };
    }

    handleEnter = () => {
      this.setState({
        enter: true
      });
    };
    handleEntered = () => {
      this.setState({
        enter: false
      });
    };
    render() {
      const { onRemoveLoading } = this.props;
      const { enter } = this.state;

      return (
        <React.Fragment>
          <PageLoader show={enter} />
          <AppRouters
            onRemoveLoading={onRemoveLoading}
            onEnter={this.handleEnter}
            onEntered={this.handleEntered}
          />
        </React.Fragment>
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
