import React, { Component } from 'react';
import { Row, Col } from '../rsuiteSource';
import DocSidebar from './DocSidebar';

class Frame extends Component {
  render() {
    return (
      <div>
        <DocSidebar />
        <div className="page-context">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Frame;