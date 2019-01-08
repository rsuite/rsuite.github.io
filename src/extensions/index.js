import React from 'react';
import Frame from '../fixtures/Frame';
import MarkdownView from '../fixtures/MarkdownView';
import PageContainer from '../fixtures/PageContainer';

export default locale => {
  const localePath = locale === 'en' ? './en' : '.';
  return () => (
    <Frame showSubmenu={false}>
      <PageContainer routerId={'extensions'}>
        <MarkdownView>{require(`${localePath}/index.md`)}</MarkdownView>
      </PageContainer>
    </Frame>
  );
};
