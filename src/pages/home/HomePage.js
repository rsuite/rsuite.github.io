import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, ButtonToolbar, FlexboxGrid, Grid, Row, Col } from 'rsuite';
import TopLevelNav from '@/components/TopLevelNav';
import LanguageSwitchButton from '@/components/LanguageSwitchButton';
import Logo from '@/components/Logo';
import ReactLogo from '@/components/ReactLogo';

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
        className="page-home"
        ref={ref => {
          this.home = ref;
        }}
      >
        <TopLevelNav hideToggle />

        <span className="language-switch-button-wrapper">
          <LanguageSwitchButton
            size="lg"
            language={_.get(locale, 'id')}
            href={localePath}
            className="home-page"
          />
        </span>

        <Row>
          <FlexboxGrid align="middle" className="banner">
            <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
              <section className="section">
                <h1 className="title">React Suite</h1>
                <p className="sub-title"> {_.get(locale, 'common.resume')}</p>
                <p>
                  <a
                    href="https://www.npmjs.com/package/rsuite"
                    target="_blank"
                  >
                    <img alt="npm" src="https://badge.fury.io/js/rsuite.svg" />
                  </a>
                  <a
                    style={{ marginLeft: 10 }}
                    href="https://github.com/rsuite/rsuite"
                    target="_blank"
                  >
                    <img
                      alt="GitHub stars"
                      src="https://img.shields.io/github/stars/rsuite/rsuite?style=social"
                    />
                  </a>
                </p>
                <ButtonToolbar>
                  <Button
                    size="lg"
                    appearance="primary"
                    componentClass="a"
                    href={`${localePath}guide/introduction`}
                  >
                    {_.get(locale, 'common.gettingStarted')}
                  </Button>
                </ButtonToolbar>
              </section>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className="logo-react-suite-wrapper" componentClass={Col} colspan={24} md={12}>
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
