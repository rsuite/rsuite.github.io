import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';

const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  toolbar: require('fs').readFileSync(__dirname + '/toolbar.js', 'utf8'),
  vertical: require('fs').readFileSync(__dirname + '/vertical.js', 'utf8'),
  block: require('fs').readFileSync(__dirname + '/block.js', 'utf8'),
  justified: require('fs').readFileSync(__dirname + '/justified.js', 'utf8'),
  sizing: require('fs').readFileSync(__dirname + '/sizing.js', 'utf8')
};
const docs = require('./index.md').split('<!--{demo}-->');


export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>

        <Markdown>{docs[0]}</Markdown>

        <h3>默认</h3>
        <Example code={examples.basic} />

        <h3>按钮组大小</h3>
        <Text>
          <code>size</code>属性设置按钮组大小, 选项包括:
          <code>lg</code>、
          <code>md</code>、
          <code>sm</code>、
          <code>xs</code>
        </Text>
        <Example code={examples.sizing} />

        <h3>按钮工具栏</h3>
        <Example code={examples.toolbar} />

        <h3>垂直</h3>
        <Text>添加属性 <code>vertical</code></Text>
        <Example code={examples.vertical} />

        <Text>添加属性 <code>block</code>，把按钮组设置为块级元素</Text>
        <Example code={examples.block} />


        <h3>调整使全行排满，两端对齐</h3>
        <Example code={examples.justified} />

        <Markdown>{docs[1]}</Markdown>

      </Col>
    );
  }
});
