import React from 'react';
import * as components from '../components';

class EmptyComponent extends React.Component {
  render() {
    return false;
  }
}

class PageComponentsDoc extends React.Component {
  render() {
    var component = this.props.params.name;
    var Doc = components[component] || EmptyComponent;
    return <Doc />;
  }
}

export default PageComponentsDoc;