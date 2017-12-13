import React from 'react';

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
