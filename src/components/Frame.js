import React, { Component } from 'react';
import _ from 'lodash';
import DocSidebar from './DocSidebar';
import TopLevelNav from './TopLevelNav';
import { DirectionContext } from '@/components/Context';

export const ThemeContext = React.createContext({
  theme: localStorage.getItem('theme') || 'default'
});

class Frame extends Component {
  constructor(props) {
    super(props);
    const { showSubmenu } = props;
    this.state = {
      showSubmenu: typeof showSubmenu !== 'undefined' ? showSubmenu : true,
      theme: localStorage.getItem('theme') || 'default'
    };
  }

  handleToggleMenu = show => {
    const { showSubmenu } = this.state;
    this.setState({
      showSubmenu: _.isUndefined(show) ? !showSubmenu : show
    });
  };

  handleChangeTheme = theme => {
    this.setState({
      theme
    });
  };

  render() {
    const { showSubmenu, theme } = this.state;
    const menuStyles = {
      width: showSubmenu ? 260 : 0
    };

    return (
      <DirectionContext.Consumer>
        {({ direction }) => {
          const contextStyle = {
            [`margin${direction === 'rtl' ? 'Right' : 'Left'}`]: showSubmenu
              ? 324
              : 80
          };
          return (
            <ThemeContext.Provider value={{ theme }}>
              <div>
                <TopLevelNav
                  showSubmenu={showSubmenu}
                  onToggleMenu={this.handleToggleMenu}
                  onChangeTheme={this.handleChangeTheme}
                />
                <DocSidebar style={menuStyles} />
                <div className="page-context" style={contextStyle}>
                  {this.props.children}
                </div>
              </div>
            </ThemeContext.Provider>
          );
        }}
      </DirectionContext.Consumer>
    );
  }
}

export default Frame;
