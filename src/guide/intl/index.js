import React from 'react';
import PageContainer from '../../fixtures/PageContainer';
import MarkdownView from '../../fixtures/MarkdownView';

class Page extends React.Component {
  render() {
    return (
      <PageContainer>
        <MarkdownView>{require('./index.md')}</MarkdownView>
      </PageContainer>
    );
  }
}

export default Page;
