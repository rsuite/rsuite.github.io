import React from 'react';
import PageContainer from '../../fixtures/PageContainer';
import MarkdownView from '../../fixtures/MarkdownView';

class UseWithCreateReactAppPage extends React.Component {
  render() {
    return (
      <PageContainer routerId="guide/usage">
        <MarkdownView>{require('./index.md')}</MarkdownView>
      </PageContainer>
    );
  }
}

export default UseWithCreateReactAppPage;
