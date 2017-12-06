import React from 'react';
import PropTypes from 'prop-types';
import DocHeader from '../fixtures/DocHeader';
import DocFooter from '../fixtures/DocFooter';
import { Grid } from 'rsuite';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class App extends React.Component {

  componentWillReceiveProps() {
    _ha && _ha('send', 'pageview', {
      'url': document.location.href
    });
  }

  render() {
    const { location } = this.props;
    const className = location.pathname === '/' ? 'home-page' : '';

    return (
      <div className={`doc-page ${className}`}>

        <DocHeader />

        <Grid className='doc-container' fluid>
          {this.props.children}
        </Grid>
        <DocFooter />
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default App;
