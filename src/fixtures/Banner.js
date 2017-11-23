import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';

const indexExample = require('fs').readFileSync(__dirname + '/indexExample.js', 'utf8');

class Banner extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id="banner" className="banner">
        {children}
        <Example isBanner code={indexExample} />
      </div>
    );
  }
}

export default Banner;
