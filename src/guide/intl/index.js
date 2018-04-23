import React from 'react';
import PageContainer from '../../fixtures/PageContainer';
import MarkdownView from '../../fixtures/MarkdownView';

class Page extends React.Component {
  render() {
    return (
      <PageContainer routerId="guide/intl">
        <MarkdownView>{require('./index.md')}</MarkdownView>
      </PageContainer>
    );
  }
}

export default Page;
