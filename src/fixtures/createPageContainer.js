import React from 'react';
import PageContainer from './PageContainer';
import MarkdownView from './/MarkdownView';
import LOCALE_ENV from '../LOCALE_ENV';

const localePath = LOCALE_ENV === 'en' ? `${name}/en/` : `${name}/`;

const createPageContainer = ({ routerId }) => {
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

export default createPageContainer;
