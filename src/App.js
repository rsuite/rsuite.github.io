import React from 'react';
import PropTypes from 'prop-types';
import DocSidebar from './fixtures/DocSidebar';
import { Grid, Row, Col } from 'rsuite';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class App extends React.Component {

  componentWillReceiveProps() {
    window._ha && _ha('send', 'pageview', {
      'url': document.location.href
    });
  }

  render() {
    const { location } = this.props;
    const className = location.pathname === '/' ? 'home-page' : '';
    return (
      <div className={`doc-page ${className}`}>
        <Grid className='doc-container' fluid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default App;
