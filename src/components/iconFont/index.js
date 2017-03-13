import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';
import IconList from './IconList';

const examples = {
    basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
};


export default React.createClass({
    render() {
        return (
            <Col md={9} sm={12}>
                <h1 className="page-header">
                    IconFont
                    <span className="page-header-en">
                        <code>IconFont</code>
                    </span>
                </h1>
                <p>RSuite 部分图标使用开源项目 <a href="http://fontawesome.io/icons/">Font Awesome</a></p>
                <h3>默认样式</h3>
                <Example code={examples.basic}/>
                <h3>组件属性</h3>
                <Markdown>
                    {require('./props.md') }
                </Markdown>
                <h3>图标列表</h3>
                <IconList/>
            </Col>
        );
    }
});
