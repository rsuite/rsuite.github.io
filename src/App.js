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
    return (
      <Grid fluid className="app-container">
        {this.props.children}
      </Grid>
    );
  }
}

export default App;
