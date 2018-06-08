import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { scrollTop } from 'dom-lib';
import { Grid } from 'rsuite';

if (__DEV__) {
  require('./less/index-dev.less');
} else {
  require('./less/index.less');
}

const contextTypes = {
  router: PropTypes.object.isRequired
};

class App extends React.PureComponent {
  componentDidMount() {
    const { onRemoveLoading } = this.props;
    onRemoveLoading && onRemoveLoading();
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    if (get(location, 'pathname') !== get(nextProps, 'location.pathname')) {
      scrollTop(window, 0);
    }
  }

  render() {
    const pathname = this.props.location.pathname;
    const className = pathname === '/' || pathname === '/en/' ? 'home-page' : '';
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
