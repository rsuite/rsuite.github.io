import React from 'react';
import PropTypes from 'prop-types';
import { scrollTop } from 'dom-lib';
import { Grid } from 'rsuite';

export const DirectionContext = React.createContext({
  direction: localStorage.getItem('direction') || 'ltr'
});

const html = document.querySelector('html');

class App extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    const direction = localStorage.getItem('direction') || 'ltr';
    this.state = {
      direction
    };
    html.dir = direction;
  }

  componentDidMount() {
    const { onRemoveLoading } = this.props;
    onRemoveLoading && onRemoveLoading();

    this.context.router.listen(() => {
      scrollTop(window, 0);
    });
  }

  handleToggleDirection = () => {
    const direction = this.state.direction === 'ltr' ? 'rtl' : 'ltr';
    this.setState({ direction });
    html.dir = direction;
    localStorage.setItem('direction', direction);
  };

  render() {
    const { direction } = this.state;

    return (
      <DirectionContext.Provider
        value={{ direction, handleToggleDirection: this.handleToggleDirection }}
      >
        <Grid fluid className="app-container">
          {this.props.children}
        </Grid>
      </DirectionContext.Provider>
    );
  }
}

export default App;
