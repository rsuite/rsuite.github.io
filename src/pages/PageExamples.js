import React from 'react';
import { Content, Row, Col, Whisper, Tooltip } from 'rsuite';
import IntroBlock from '../fixtures/IntroBlock';
import { Markdown } from '../fixtures/Markdown';

import dmpPreview from '../../resources/images/dmp-preview.png';
import dashboardPreview from '../../resources/images/dashboard-preview.png';
import examplePreview from '../../resources/images/example-preview.png';

const data = [
    {
        thumb: examplePreview,
        url: 'http://rsuite.github.io/examples/webpack-rudux-router',
        intro: 'webpack + react + react-router + redux',
        name: 'RSuite Example',
        src: 'https://github.com/rsuite/rsuite/tree/master/examples/webpack-rudux-router'
    },
    {
        thumb: dmpPreview,
        url: 'http://insight.hypers.com.cn',
        intro: '帮助广告主或营销人员深度理解媒体投放效果。',
        name: 'HYPER DMP',
        src: 'http://insight.hypers.com.cn'
    },
    {
        thumb: dashboardPreview,
        url: 'http://dashboard.hypers.com.cn',
        intro: '聚合Hyper Data，予以最直观展现',
        name: 'HYPER Dashboard',
        src: 'http://dashboard.hypers.com.cn'
    }
];


const PageExamples = React.createClass({
    render() {
        let introBlocks = data.map((info, key) => {
            return (
                <IntroBlock
                    key={key}
                    {...info}
                />
            );
        });

        return (
            <Content className='box-wrapper'>
                <Row>
                    <Col md={12}>
                        <Markdown>
                            {require('./examples.md')}
                        </Markdown>
                    </Col>
                </Row>
                <Row>
                    {introBlocks}
                </Row>
            </Content>
        );
    }
});

export default PageExamples;
