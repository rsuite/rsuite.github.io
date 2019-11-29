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
import loadCssFile from '@/utils/loadCssFile';
import {
  readTheme,
  writeTheme,
  getThemeCssPath,
  getThemeId
} from '@/utils/themeHelpers';
import { ThemeContext } from '@/components/Context';

const html = document.querySelector('html');

export default locale => {
  class AppRouters extends React.Component {
    constructor(props) {
      super(props);
      const [theme, direction] = readTheme();
      this.state = {
        direction,
        theme
      };
      //skip loading default ltr theme
      if (theme != 'default' || direction != 'ltr')
        this.loadTheme(theme, direction);
    }

    loadTheme = (themeName, direction) => {
      writeTheme(themeName, direction);
      const { globalVars = {} } = window.less || {};
      window.less &&
        window.less.modifyVars({
          ...globalVars,
          '@theme-is-default': themeName === 'default'
        });
      html.dir = direction;
      const themeId = getThemeId(themeName, direction);
      loadCssFile(getThemeCssPath(themeName, direction), themeId).then(() => {
        Array.from(document.querySelectorAll('[id^=theme]')).forEach(css => {
          if (css.id !== themeId) {
            css.remove();
          }
        });
      });
    };

    handleToggleTheme = () => {
      const theme = this.state.theme === 'default' ? 'dark' : 'default';
      this.setState({ theme });
      this.loadTheme(theme, this.state.direction);
    };

    handleToggleDirection = () => {
      const direction = this.state.direction === 'ltr' ? 'rtl' : 'ltr';
      this.setState({ direction });
      this.loadTheme(this.state.theme, direction);
    };

    render() {
      const { onEnter, onEntered, onRemoveLoading } = this.props;
      return (
        <ThemeContext.Provider
          value={{
            theme: readTheme(),
            handleToggleDirection: this.handleToggleDirection,
            handleToggleTheme: this.handleToggleTheme
          }}
        >
          <IntlProvider locale={getDict(locale)}>
            <RSIntlProvider
              locale={locale === 'en' ? enUS : zhCN}
              rtl={this.state.direction === 'rtl'}
            >
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
        </ThemeContext.Provider>
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
