import React from 'react';
import { Col } from '../rsuiteSource';
import PageContainer from './PageContainer';
import * as rsuite from '../rsuiteSource';
import Paragraph from '../fixtures/Paragraph';
import MarkdownView from '../fixtures/MarkdownView';
import CodeView from '../fixtures/CodeView';

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: ['transform-class-properties']
};

class ComponentExample extends React.Component {
  render() {
    const { context, examples, children, dependencies, ...rest } = this.props;
    const docs = context.split('<!--{demo}-->');

    return (
      <PageContainer {...rest}>
        <MarkdownView>{docs[0]}</MarkdownView>
        {examples.map((item, index) => (
          <CodeView
            babelOptions={babelOptions}
            buttonClassName="btn-subtle btn-icon-circle"
            key={index}
            source={item}
            dependencies={{ ...dependencies, Paragraph, rsuite }}
          />
        ))}
        <MarkdownView>{docs[1]}</MarkdownView>
        {children}
      </PageContainer>
    );
  }
}

export default ComponentExample;
