import React from 'react';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import { Container, Content, Row, Col, FormControl } from 'rsuite';
import _ from 'lodash';

import Banner from '../fixtures/Banner';
import IntroPanel from '../fixtures/IntroPanel';
import fetchJsonp from '../uitils/fetchJsonp';
import data from '../componentList';
import Logo from '../fixtures/Logo';


const PageIndex = React.createClass({
  handleWindowResize() {
    let banner = document.getElementById('banner');
    let height = parseInt(getHeight(banner)) - 20;
    let indexContent = document.getElementById('index-content');
    addStyle(indexContent, 'margin-top', (height < 0 ? 0 : height) + 'px');
  },

  getInitialState() {
    return {
      keyword: '',
      data
    };
  },
  fetchGithubData() {
    let { data } = this.state;
    fetchJsonp('https://api.github.com/users/rsuite/repos').then((resp) => {
      if (!resp.ok) {
        return;
      }

      resp.json().then((result) => {
        const repos = _.get(result, ['data']) || [];
        data = data.map((info) => {
          let repo = repos.find(item => item.name === info.repoName);
          return { ...repo, ...info, };
        });
        this.isMounted && this.setState({ data });
      });

    });
  },
  componentWillMount() {
    this.isMounted = true;
    this.fetchGithubData();
  },
  componentDidMount() {
    this._onWindowResizeListener = on(window, 'resize', this.handleWindowResize);
    this.handleWindowResize();
  },
  componentWillUnmount() {
    this.isMounted = false;
    if (this._onWindowResizeListener) {
      this._onWindowResizeListener.off();
    }
  },
  renderComponents() {
    const { data, keyword } = this.state;
    const items = data.filter((item) => {
      let tags = item.tags || [];
      return tags.some((tag) => {
        return tag.indexOf(_.trim(keyword.toLocaleLowerCase())) >= 0;
      });
    });


    return (
      <Row>
        {
          items.map((info, key) => {
            return (
              <IntroPanel
                {...info}
                key={key}
              />
            );
          })
        }
      </Row>
    );
  },
  render() {



    return (
      <div>
        <Banner id="banner">
          <div className="banner-content">
            <h1 className="logo">
              <Logo width={120} />
              <p>RSUITE</p>
            </h1>
            <p className="sub-title">一套 React 的 UI 组件库</p>
            <div className="menu-nav">
              <Link to="/getting-started">介绍</Link>
              <Link to="/components/buttons">组件</Link>
              <Link to="/examples">实践</Link>
              <a href="https://github.com/suitejs/suite" target="_blank">GitHub</a>
            </div>
          </div>
        </Banner>
        <Content id="index-content" className="box-wrapper">
          <Row>
            <Col className="search-bar" md={6} mdOffset={3}>
              <FormControl
                placeholder="搜索组件"
                onChange={_.debounce((keyword) => {
                  this.setState({ keyword });
                }, 400)} />
            </Col>
          </Row>
          {this.renderComponents()}
        </Content>
      </div>
    );
  }
});

export default PageIndex;
