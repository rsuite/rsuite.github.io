import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';


const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  inputGroup: require('fs').readFileSync(__dirname + '/inputGroup.js', 'utf8')
};

export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <h1 className="page-header">
          Contorls 支持的表单控件
                    <span className="page-header-en">
            <code>{'<Form>'}</code>、
                        <code>{'<FormGroup>'}</code>、
                        <code>{'<ControlLabel>'}</code>、

                        <code>{'<Checkbox>'}</code>、
                        <code>{'<CheckboxGroup>'}</code>、
                        <br />
            <code>{'<Radio>'}</code>、
                        <code>{'<RadioGroup>'}</code>、
                        <code>{'<HelpBlock>'}</code>
          </span>
        </h1>
        <p>表单数据验证，查看 <a href="https://rsuitejs.com/form-lib/" target="_blank">form-lib</a></p>

        <h3>默认</h3>
        <Example code={examples.basic} />


        <h3>InputGroup</h3>
        <Example code={examples.inputGroup} />


        <h3>组件属性</h3>
        <Markdown>
          {require('./props.md')}
        </Markdown>

      </Col>
    );
  }
});
