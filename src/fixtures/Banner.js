import React from 'react';
import ReactDOM from 'react-dom';
import CodeView from 'react-code-view';

class Banner extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id="banner" className="banner">
        {children}
      </div>
    );
  }
}

export default Banner;
