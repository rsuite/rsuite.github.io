import React from 'react';
import { Col } from 'rsuite';
import $ from 'jquery';
import { Markdown } from '../fixtures/Markdown';
import Example from '../fixtures/Example';

export function splitDocs(html) {
  const $dom = $(`<div>${html}</div>`);
  const $code = $dom.find('code.javascript');
  $dom.find('.doc-highlight').remove();
  return {
    code: $code.text(),
    text: $dom.prop('outerHTML')
  };
}


export default React.createClass({

  render() {
    const { context, examples, children } = this.props;
    const docs = context.split('<!--{demo}-->');

    return (
      <Col md={9} sm={12}>
        <Markdown>{docs[0]}</Markdown>
        {
          examples.map((item, index) => (
            <Example key={index} code={item.code} text={item.text} />
          ))
        }
        <Markdown>{docs[1]}</Markdown>
        {children}
      </Col>
    );
  }
});