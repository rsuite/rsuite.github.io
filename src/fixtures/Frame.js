import React, { Component } from 'react';
import { Row, Col } from '../rsuiteSource';
import DocSidebar from './DocSidebar';
import TopLevelNav from './TopLevelNav';

class Frame extends Component {
  render() {
    return (
      <div>
        <TopLevelNav />
        <DocSidebar />
        <div className="page-context">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Frame;