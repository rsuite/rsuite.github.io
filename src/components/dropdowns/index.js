import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';

const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  sizing: require('fs').readFileSync(__dirname + '/sizing.js', 'utf8'),
  select: require('fs').readFileSync(__dirname + '/select.js', 'utf8'),
  noCaret: require('fs').readFileSync(__dirname + '/noCaret.js', 'utf8'),
  dropup: require('fs').readFileSync(__dirname + '/dropup.js', 'utf8'),
  block: require('fs').readFileSync(__dirname + '/block.js', 'utf8')
};
const docs = require('./index.md').split('<!--{demo}-->');


export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <Markdown>{docs[0]}</Markdown>

        <h3>默认</h3>
        <Example code={examples.basic} />

        <h3>下拉菜单大小</h3>
        <Text>
          <code>size</code>属性设置下拉菜单大小, 选项包括:
          <code>lg</code>、
          <code>md</code>、
          <code>sm</code>、
          <code>xs</code>
        </Text>
        <Example code={examples.sizing} />

        <Text>
          创建块级的 Dropdown，给组件设置一个 <code>block</code> 属性，
          如果需要内容非居中，而是两端对齐，设置一个 <code>bothEnds</code> 属性。
        </Text>
        <Example code={examples.block} />

        <h3>模拟 Select</h3>
        <Text>
          设置一个 <code>select</code> 属性。
        </Text>
        <Example code={examples.select} />

        <h3>没有小图标</h3>
        <Text>
          设置一个 <code>noCaret</code> 属性。
        </Text>
        <Example code={examples.noCaret} />

        <h3>向上展开菜单</h3>
        <Text>
          设置一个 <code>dropup</code> 属性。
        </Text>
        <Example code={examples.dropup} />

        <Markdown>{docs[1]}</Markdown>
      </Col>
    );
  }
});
