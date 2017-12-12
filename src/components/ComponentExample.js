import React from 'react';
import { Col } from '../rsuiteSource';
import { Markdown } from 'react-markdown-reader';
import CodeView from 'react-code-view';
import PageContainer from './PageContainer';



class ComponentExample extends React.Component {
  render() {
    const {
      context,
      examples,
      children,
      dependencies
    } = this.props;
    const docs = context.split('<!--{demo}-->');

    return (
      <PageContainer>
        <Markdown>{docs[0]}</Markdown>
        {
          examples.map((item, index) => (
            <CodeView
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