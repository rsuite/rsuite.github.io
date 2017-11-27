import React from 'react';
import { Col } from 'rsuite';
import $ from 'jquery';
import { Markdown } from 'react-markdown-reader';
import CodeView from 'react-code-view';


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
      <Col md={9} sm={12}>
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
      </Col>
    );
  }
}

export default ComponentExample;