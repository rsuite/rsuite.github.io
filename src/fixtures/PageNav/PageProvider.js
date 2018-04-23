import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureUpdate from './util/pureUpdate';

class PageProvider extends Component {
  static childContextTypes = {
    content: PropTypes.any,
    setContent: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }
  getChildContext() {
    return {
      ...this.state,
      setContent: this.setContent
    };
  }
  shouldComponentUpdate = pureUpdate.bind(this);
  setContent = content => {
    this.setState({
      content
    });
  };
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default PageProvider;
