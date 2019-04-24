import React from 'react';
import PropTypes from 'prop-types';
import { scrollTop } from 'dom-lib';
import { Grid } from 'rsuite';

class App extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount() {
    const { onRemoveLoading } = this.props;
    onRemoveLoading && onRemoveLoading();

    this.context.router.listen(() => {
      scrollTop(window, 0);
    });
  }

  render() {
    const pathname = this.props.location.pathname;
    const className =
      pathname === '/' || pathname === '/en/' ? 'home-page' : '';
    return (
      <div className={`doc-page ${className} night`}>
        <Grid className="doc-container" fluid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
