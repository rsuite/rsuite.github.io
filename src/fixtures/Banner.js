import React from 'react';

class Banner extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id="banner" className="banner">
        {children}
        <div className="starry-warpper">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
        </div>
      </div>
    );
  }
}

export default Banner;
