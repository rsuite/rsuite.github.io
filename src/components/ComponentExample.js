import React from 'react';
import { Col } from '../rsuiteSource';
import { Markdown } from 'react-markdown-reader';
import CodeView from 'react-code-view';
import PageContainer from './PageContainer';

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: [
    'transform-class-properties'
  ]
};

class ComponentExample extends React.Component {
  render() {
    const {
      context,
      examples,
      children,
      dependencies,
      ...props
    } = this.props;
    const docs = context.split('<!--{demo}-->');

    return (
      <PageContainer {...props}>
        <Markdown>{docs[0]}</Markdown>
        {
          examples.map((item, index) => (
            <CodeView
              babelOptions={babelOptions}
              key={index}
              source={item}
              dependencies={dependencies}
            />
          ))
        }
        <Markdown>{docs[1]}</Markdown>
        {children}
      </PageContainer>
    );
  }
}

export default ComponentExample;