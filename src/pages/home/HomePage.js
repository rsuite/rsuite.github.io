import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';
import { addStyle, getHeight, on } from 'dom-lib';
import { Content, Icon, Button, FlexboxGrid, Grid, Row } from 'rsuite';

import Logo from '@/components/Logo';
import ReactLogo from '@/components/ReactLogo';
import LanguageSwitchButton from '@/components/LanguageSwitchButton';
import Header from './Header';

class HomePage extends React.Component {
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
    const setRunning = setTimeout(() => {
      this.home && this.setState({ running: true });
      clearTimeout(setRunning);
    }, 1.7e3);
  }

  render() {
    const { locale } = this.context;
    const localePath = _.get(locale, 'id') === 'en-US' ? '/en/' : '/';

    return (
      <Grid
        ref={ref => {
          this.home = ref;
        }}
      >
        <Row>
          <Header localePath={localePath} locale={locale} />
        </Row>
        <Row>
          <FlexboxGrid align="middle" className="banner">
            <FlexboxGrid.Item colspan={12}>
              <section className="section">
                <h1 className="title">React Suite</h1>
                <p className="sub-title"> {_.get(locale, 'common.resume')}</p>
                <p>
                  <a href="https://github.com/rsuite/rsuite" target="_blank">
                    <img
                      alt="GitHub stars"
                      src="https://img.shields.io/github/stars/rsuite/rsuite?style=social"
                    />
                  </a>
                  <a
                    style={{ marginLeft: 10 }}
                    href="https://gitee.com/rsuite/rsuite/stargazers"
                    target="_blank"
                  >
                    <img
                      src="https://gitee.com/rsuite/rsuite/badge/star.svg?theme=gray"
                      alt="star"
                    />
                  </a>
                </p>

                <Button
                  size="lg"
                  appearance="primary"
                  componentClass="a"
                  href={`${localePath}guide/introduction`}
                >
                  {_.get(locale, 'common.gettingStarted')}
                </Button>
              </section>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item colspan={12}>
              <div className="section logo-react-suite">
                <Logo width={120} />
                <ReactLogo running={this.state.running} />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
