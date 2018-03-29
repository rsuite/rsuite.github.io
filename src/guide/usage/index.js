import React from 'react';
import { Link } from 'react-router';
import PageContainer from '../../fixtures/PageContainer';
import MarkdownView from '../../fixtures/MarkdownView';

class InstallationPage extends React.Component {
  render() {
    return (
      <PageContainer routerId="guide/usage">
        <MarkdownView>{require('./index.md')}</MarkdownView>
      </PageContainer>
    );
  }
}

export default InstallationPage;
