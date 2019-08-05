import React from 'react';
import Frame from '@/components/Frame';
import MarkdownView from '@/components/MarkdownView';
import PageContainer from '@/components/PageContainer';

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
