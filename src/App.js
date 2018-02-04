import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { scrollTop } from 'dom-lib';
import DocSidebar from './fixtures/DocSidebar';
import { Grid, Row, Col, IntlProvider, enGB } from './rsuiteSource';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class App extends React.Component {

  componentWillReceiveProps(nextProps) {

    const { location } = this.props;
    if (get(location, 'pathname') !== get(nextProps, 'location.pathname')) {
      scrollTop(window, 0);
    }

    window._ha && _ha('send', 'pageview', {
      'url': document.location.href
    });
  }

  render() {
    const { location } = this.props;
    const className = location.pathname === '/' ? 'home-page' : '';
    return (
      <IntlProvider locale={enGB}>
        <div className={`doc-page ${className}`}>
          <Grid className='doc-container' fluid>
            {this.props.children}
          </Grid>
        </div>
      </IntlProvider>
    );
  }
}

App.contextTypes = contextTypes;

export default App;
