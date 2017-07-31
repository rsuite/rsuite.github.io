import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';


const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  size: require('fs').readFileSync(__dirname + '/size.js', 'utf8'),
  disabled: require('fs').readFileSync(__dirname + '/disabled.js', 'utf8'),
  inner: require('fs').readFileSync(__dirname + '/inner.js', 'utf8'),
};

export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <h1 className="page-header">
          Toggles
            <span className="page-header-en">
            <code>{'<Toggle>'}</code>
          </span>
        </h1>

        <h3>默认</h3>
        <Example code={examples.basic} />

        <h3>禁用</h3>
        <Example code={examples.disabled} />

        <h3>开关大小</h3>
        <Text>
          <code>size</code>属性设置开关大小, 值包括:
          <code>lg</code> <code>md</code> <code>sm</code>
        </Text>
        <Example code={examples.size} />

        <h3>文字和图标</h3>
        <Example code={examples.inner} />

        <h3>组件属性</h3>
        <Markdown>
          {require('./props.md')}
        </Markdown>

      </Col>
    );
  }
});
