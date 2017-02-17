
import React from 'react';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import { Container, Content, Row, Col } from 'rsuite';


import { Markdown } from '../fixtures/Markdown';
import Banner from '../fixtures/Banner';
import IntroBlock from '../fixtures/IntroBlock';

const data = [
    {
        icon: 'fa fa-briefcase',
        url: 'http://rsuite.github.io/#/components',
        name: 'Basis Components',
        intro: '基础组件',
        src: 'https://github.com/rsuite/rsuite'
    },{
        icon: 'fa fa-table',
        url: 'http://rsuite.github.io/rsuite-table',
        name: 'RSuite Table',
        intro: 'Table 组件，支持Tree，自定义列宽，锁定列及表头等功能',
        src: 'https://github.com/rsuite/rsuite-table'
    },
    {
        icon: 'fa fa-calendar',
        url: 'http://rsuite.github.io/rsuite-datepicker',
        name: 'RSuite Datepicker',
        intro: '日历选择组件',
        src: 'https://github.com/rsuite/rsuite-datepicker'
    },
    {
        icon: 'fa fa-check',
        url: 'http://rsuite.github.io/rsuite-picker',
        name: 'RSuite Picker',
        intro: '选择组件，可以替代 Select 和 Dropdown 组件',
        src: 'https://github.com/rsuite/rsuite-picker'
    },
    {
        icon: 'fa fa-bar-chart',
        url: 'http://rsuite.github.io/rsuite-echarts',
        name: 'RSuite ECharts',
        intro: 'ECharts 的 React 组件',
        src: 'https://github.com/rsuite/rsuite-echarts'
    },
    {
        icon:'fa fa-cloud-upload',
        url: 'http://rsuite.github.io/rsuite-uploader',
        name: 'RSuite Uploader',
        intro: '上传文件组件',
        src: 'https://github.com/rsuite/rsuite-uploader'
    }
];

const PageIndex = React.createClass({
    handleWindowResize() {
        let banner = document.getElementById('banner');
        let height = parseInt(getHeight(banner)) - 50;
        let indexContent = document.getElementById('index-content');
        addStyle(indexContent, 'margin-top', (height < 0 ? 0 : height) + 'px');
    },
    componentDidMount() {
        this._onWindowResizeListener = on(window, 'resize', this.handleWindowResize);
        this.handleWindowResize();
    },
    componentWillUnmount() {
        if (this._onWindowResizeListener) {
            this._onWindowResizeListener.off();
        }
    },
    render() {



        return (
            <div>
                <Banner id="banner">
                    <h1 className="logo"><span className="prefix">R</span>Suite</h1>
                    <p className="sub-title">一套基于 React 的 Web 组件库</p>
                    <div className="nav">
                        <Link to="/getting-started" >开始使用</Link>
                        <Link to="/components/buttons">组件</Link>
                        <Link to="/examples">实例</Link>
                        <a href="https://github.com/suitejs/suite">GitHub</a>
                    </div>
                </Banner>
                <Content id="index-content" className="box-wrapper">
                    <h3>RSuite</h3>
                    <p>RSuite 是一套基于 React 开发的 Web 组件库，提供 Bootstrap 设计体系的常用组件，并且会在此基础上持续开发一些高级组件。</p>
                    <p>我们的目标就是让 WEB 开发更快捷，同时具有一定的灵活性和扩展性。</p>
                    <Row >
                        {
                            data.map((info, key) => {
                                return (
                                    <IntroBlock
                                        key={key}
                                        {...info}
                                        />
                                );
                            })
                        }
                    </Row>
                </Content>
            </div>
        );
    }
});

export default PageIndex;
