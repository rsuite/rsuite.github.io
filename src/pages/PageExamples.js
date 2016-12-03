import React from 'react';
import { Content, Row, Col, Whisper, Tooltip } from 'rsuite';
import IntroBlock from '../fixtures/IntroBlock';

const data = [
    {
        thumb: 'http://placehold.it/370x220/373c44?text=EXAMPLE',
        url: 'http://rsuite.github.io/examples/webpack-rudux-router',
        intro: 'webpack + react + react-router + redux',
        name: 'RSuite Example',
        src: 'https://github.com/rsuite/rsuite/tree/master/examples/webpack-rudux-router'
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
                    {introBlocks}
                </Row>
            </Content>
        );
    }
});

export default PageExamples;
