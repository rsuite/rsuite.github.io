import React from 'react';
import PageContainer from './PageContainer';
import MarkdownView from './MarkdownView';

const createPageContainer = ({ routerId }) => {
  return locale => {
    const localePath = locale === 'en' ? `${name}/en/` : `${name}/`;
    const content = require(`../${routerId}${localePath}index.md`);
    class PageContainerWithContent extends React.Component {
      render() {
        return (
          <PageContainer routerId={routerId}>
            <MarkdownView>{content}</MarkdownView>
          </PageContainer>
        );
      }
    }

    return PageContainerWithContent;
  };
};

export default createPageContainer;
