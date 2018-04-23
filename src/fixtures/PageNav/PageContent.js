import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureUpdate from './util/pureUpdate';

class PageContent extends Component {
  static contextTypes = {
    setContent: PropTypes.func
  };
  shouldComponentUpdate = pureUpdate.bind(this);
  render() {
    const { children } = this.props;
    const { setContent } = this.context;
    return <div ref={ref => setContent(ref)}>{children}</div>;
  }
}

export default PageContent;
