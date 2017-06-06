import React from 'react';

import DocHeader from '../fixtures/DocHeader';
import DocFooter from '../fixtures/DocFooter';
import Container from 'rsuite/lib/Container';


const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillReceiveProps: function (nextProps) {
    _ha && _ha('send', 'pageview', {
      'url': document.location.href
    });
  },
  render: function () {
    const { location } = this.props;
    const className = location.pathname === '/' ? 'home-page' : '';
    return (
      <div className={`doc-page ${className}`}>
        <DocHeader />
        <Container className='doc-container'>
          {this.props.children}
        </Container>
        <DocFooter />
      </div>
    );
  }
});

export default App;
