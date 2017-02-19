import React from 'react';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import { Container, Content, Row, Col } from 'rsuite';

import Banner from '../fixtures/Banner';
import IntroPanel from '../fixtures/IntroPanel';

import fetchJsonp from '../uitils/fetchJsonp';

const data = [
    {
        icon: 'fa fa-briefcase',
        bg: '#41a66e',
        repoName: 'rsuite',
        url: 'http://rsuite.github.io/#/components',
        name: 'Basis Components',
        intro: '基础组件',
        src: 'https://github.com/rsuite/rsuite'
    }, {
        icon: 'fa fa-table',
        bg: '#004889',
        repoName: 'rsuite-table',
        url: 'http://rsuite.github.io/rsuite-table',
        name: 'RSuite Table',
        intro: 'Table 组件，支持Tree，自定义列宽，锁定列及表头等功能',
        src: 'https://github.com/rsuite/rsuite-table'
    },
    {
        icon: 'fa fa-calendar',
        bg: '#bd0007',
        repoName: 'rsuite-datepicker',
        url: 'http://rsuite.github.io/rsuite-datepicker',
        name: 'RSuite Datepicker',
        intro: '日历选择组件',
        src: 'https://github.com/rsuite/rsuite-datepicker'
    },
    {
        icon: 'fa fa-check',
        bg: '#ff9800',
        repoName: 'rsuite-picker',
        url: 'http://rsuite.github.io/rsuite-picker',
        name: 'RSuite Picker',
        intro: '选择组件，可以替代 Select 和 Dropdown 组件',
        src: 'https://github.com/rsuite/rsuite-picker'
    },
    {
        icon: 'fa fa-bar-chart',
        bg: '#990066',
        repoName: 'rsuite-echarts',
        url: 'http://rsuite.github.io/rsuite-echarts',
        name: 'RSuite ECharts',
        intro: 'ECharts 的 React 组件',
        src: 'https://github.com/rsuite/rsuite-echarts'
    },
    {
        icon: 'fa fa-cloud-upload',
        bg: '#5677AC',
        repoName: 'rsuite-uploader',
        url: 'http://rsuite.github.io/rsuite-uploader',
        name: 'RSuite Uploader',
        intro: '上传文件组件',
        src: 'https://github.com/rsuite/rsuite-uploader'
    }
];

const PageIndex = React.createClass({
    handleWindowResize() {
        let banner = document.getElementById('banner');
        let height = parseInt(getHeight(banner)) - 20;
        let indexContent = document.getElementById('index-content');
        addStyle(indexContent, 'margin-top', (height < 0 ? 0 : height) + 'px');
    },
    getInitialState(){
        return {
            data
        };
    },
    fetchGithubData(){
        let { data } = this.state;
        fetchJsonp('https://api.github.com/users/rsuite/repos').then((resp) => {
            if (resp.ok) {
                resp.json().then((result) => {
                    const respData = Array.isArray(result.data) ? result.data : [];
                    const startCount = respData.reduce((obj, info) => {
                        const { name, stargazers_count } = info;
                        obj[name] = stargazers_count;
                        return obj;
                    }, {});

                    data = data.map((info) => {
                        const { repoName } = info;
                        const stars = startCount[repoName];
                        if (stars !== undefined) {
                            info.stars = stars;
                        }
                        return info;
                    });

                    this.setState({ data });
                });
            }
        });
    },
    componentWillMount(){
        this.fetchGithubData();
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
        const { data } = this.state;

        return (
            <div>
                <Banner id="banner">
                    <h1 className="logo"><span className="prefix">R</span>Suite</h1>
                    <p className="sub-title">一套 React 的 UI 组件库</p>
                    <div className="nav">
                        <Link to="/getting-started">介绍</Link>
                        <Link to="/components/buttons">组件</Link>
                        <Link to="/examples">示例</Link>
                        <a href="https://github.com/suitejs/suite">GitHub</a>
                    </div>
                </Banner>
                <Content id="index-content" className="box-wrapper">

                    <Row >
                        {
                            data.map((info, key) => {

                                return (
                                    <IntroPanel key={key} {...info}/>
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
