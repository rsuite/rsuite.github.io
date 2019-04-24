import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import {  Content, Icon, Button } from 'rsuite';

import Banner from './fixtures/Banner';
import Logo from './fixtures/Logo';
import ReactLogo from './fixtures/ReactLogo';
import LanguageSwitchButton from './fixtures/LanguageSwitchButton';

class Home extends React.Component {
  static contextTypes = {
    locale: PropTypes.object
  };
  constructor(props) {
    super();
    this.state = {
      running: false
    };
  }
  componentDidMount() {
    this._onWindowResizeListener = on(
      window,
      'resize',
      this.handleWindowResize
    );
    this.handleWindowResize();
    const setRunning = setTimeout(() => {
      this.home && this.setState({ running: true });
      clearTimeout(setRunning);
    }, 1.7e3);
  }

  componentWillUnmount() {
    if (this._onWindowResizeListener) {
      this._onWindowResizeListener.off();
    }
  }

  handleWindowResize = () => {
    let banner = document.getElementById('banner');
    let height = parseInt(getHeight(banner)) - 20;
    let indexContent = document.getElementById('index-content');
    addStyle(indexContent, 'margin-top', (height < 0 ? 0 : height) + 'px');
  };

  render() {
    const { locale } = this.context;
    const { showLaserBeam } = this.state;
    const localePath = _.get(locale, 'id') === 'en-US' ? '/en/' : '/';

    return (
      <div
        ref={ref => {
          this.home = ref;
        }}
      >
        <Banner id="banner">
          <div className="banner-content">
            <h1 className="logo">
              <Logo width={120} />
              <p style={{ marginTop: 16 }}>RSUITE v4</p>
            </h1>
            <p className="sub-title"> {_.get(locale, 'common.resume')}</p>
            <div className="menu-nav">
              <Link
                className="hvr-underline-from-center"
                to={`${localePath}guide/introduction`}
              >
                {_.get(locale, 'common.guide')}
              </Link>

              <Link
                className="hvr-underline-from-center"
                to={`${localePath}components/overview`}
              >
                {_.get(locale, 'common.components')}
              </Link>
              <Link
                className="hvr-underline-from-center"
                to={`${localePath}tools/palette`}
              >
                {_.get(locale, 'common.tools')}
              </Link>
              <Link
                className="hvr-underline-from-center"
                to={`${localePath}extensions`}
              >
                {_.get(locale, 'common.extension')}
              </Link>
              <a
                className="hvr-underline-from-center"
                href="/design/index.html"
                target="_blank"
              >
                {_.get(locale, 'common.design')}
                <Icon icon="external-link-square" className="external-link" />
              </a>
            </div>
            <ReactLogo
              style={{
                width: '1000px',
                height: '1000px',
                left: '-251px',
                top: '-412px',
                position: 'absolute',
                zIndex: -1
              }}
              running={this.state.running}
            />
          </div>
        </Banner>

        <div className="header-toolbar">
          
          <Button
            appearance={'link'}
            href="https://github.com/rsuite/rsuite"
            target="_blank"
          >
            GitHub
            <Icon icon="external-link-square" className="external-link" />
          </Button>
          <Button
            appearance={'link'}
            href="https://gitee.com/rsuite/rsuite"
            target="_blank"
          >
            Gitee
            <Icon icon="external-link-square" className="external-link" />
          </Button>

          <LanguageSwitchButton
            language={_.get(locale, 'id')}
            href={localePath}
            appearance={'link'}
            className="btn-switch"
          />
        </div>
        <Content id="index-content" className="box-wrapper" />
      </div>
    );
  }
}

export default Home;
