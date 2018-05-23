import React, { Component } from 'react';
import _ from 'lodash';
import DocSidebar from './DocSidebar';
import TopLevelNav from './TopLevelNav';

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmenu: true
    };
  }
  handleToggleMenu = show => {
    const { showSubmenu } = this.state;
    this.setState({
      showSubmenu: _.isUndefined(show) ? !showSubmenu : show
    });
  };
  render() {
    const { showSubmenu } = this.state;
    const menuStyles = {
      width: showSubmenu ? 260 : 0
    };
    const contextStyle = {
      marginLeft: showSubmenu ? 324 : 80
    };

    return (
      <div>
        <TopLevelNav showSubmenu={showSubmenu} onToggleMenu={this.handleToggleMenu} />
        <DocSidebar style={menuStyles} />
        <div className="page-context" style={contextStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Frame;
