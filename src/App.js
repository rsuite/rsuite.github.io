import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { scrollTop } from 'dom-lib';
import DocSidebar from './fixtures/DocSidebar';
import { Grid } from './rsuiteSource';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    if (get(location, 'pathname') !== get(nextProps, 'location.pathname')) {
      scrollTop(window, 0);
    }
  }

  render() {
    const { location } = this.props;
    const className = location.pathname === '/' ? 'home-page' : '';
    return (
      <div className={`doc-page ${className} night`}>
        <Grid className="doc-container" fluid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default App;
