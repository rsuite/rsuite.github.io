import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';


const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  shape: require('fs').readFileSync(__dirname + '/shape.js', 'utf8')
};

export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <h1 className="page-header">
          HelpBlock
            <span className="page-header-en">
            <code>{'<HelpBlock>'}</code>
          </span>
        </h1>

        <h3>默认</h3>
        <Example code={examples.basic} />

        <h3>多形态</h3>
        <Example code={examples.shape} />

        <h3>组件属性</h3>
        <Markdown>
          {require('./props.md')}
        </Markdown>

      </Col>
    );
  }
});
