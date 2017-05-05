import React from 'react';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import { Container, Content, Row, Col } from 'rsuite';

import Banner from '../fixtures/Banner';
import IntroPanel from '../fixtures/IntroPanel';
import fetchJsonp from '../uitils/fetchJsonp';
import data from '../componentList';


const PageIndex = React.createClass({
    handleWindowResize() {
        let banner = document.getElementById('banner');
        let height = parseInt(getHeight(banner)) - 20;
        let indexContent = document.getElementById('index-content');
        addStyle(indexContent, 'margin-top', (height < 0 ? 0 : height) + 'px');
    },

    getInitialState() {
        return {
            data
        };
    },
    fetchGithubData() {
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
    componentWillMount() {
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
                    <h1 className="logo">
                        <img src="/resources/images/logo.png" height={42} />
                    </h1>
                    <p className="sub-title">一套 React 的 UI 组件库</p>
                    <div className="nav">
                        <Link to="/getting-started">介绍</Link>
                        <Link to="/components/buttons">组件</Link>
                        <Link to="/examples">实践</Link>
                        <a href="https://github.com/suitejs/suite" target="_blank">GitHub</a>
                    </div>
                </Banner>
                <Content id="index-content" className="box-wrapper">

                    <Row >
                        {
                            data.map((info, key) => {

                                return (
                                    <IntroPanel key={key} {...info} />
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
