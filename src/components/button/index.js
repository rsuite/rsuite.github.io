import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';

const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  size: require('fs').readFileSync(__dirname + '/size.js', 'utf8'),
  block: require('fs').readFileSync(__dirname + '/block.js', 'utf8'),
  shape: require('fs').readFileSync(__dirname + '/shape.js', 'utf8'),
  disabled: require('fs').readFileSync(__dirname + '/disabled.js', 'utf8'),
};
const docs = require('./index.md').split('<!--{demo}-->');

export default React.createClass({

  render() {
    return (
      <Col md={9} sm={12}>
        <Markdown>{docs[0]}</Markdown>

        <h3>默认</h3>
        <Example code={examples.basic} />

        <h3>样式</h3>
        <Text>
          <code>shape</code> 属性设置按钮样式，选项包括:
          <code>default</code>、
          <code>primary</code>、
          <code>success</code>、
          <code>warning</code>、
          <code>danger</code>、
          <code>info</code>、
          <code>link</code>
        </Text>
        <Example code={examples.shape} />

        <h3>按钮大小</h3>
        <Text>
          <code>size</code>属性设置按钮大小, 选项包括:
          <code>lg</code>、
          <code>md</code>、
          <code>sm</code>、
          <code>xs</code>
        </Text>
        <Example code={examples.size} />

        <h3>禁用</h3>
        <Example code={examples.disabled} />

        <h3>块级按钮</h3>
        <Text>创建块级的按钮，给组件设置一个 <code>block</code> 属性</Text>
        <Example code={examples.block} />

        <Markdown>{docs[1]}</Markdown>

      </Col>
    );
  }
});
