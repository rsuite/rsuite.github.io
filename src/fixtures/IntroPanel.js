import React from 'react';
import PropTypes from 'prop-types';
import { Col, Whisper, Tooltip } from 'rsuite';


const propTypes = {
  intro: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  stars: PropTypes.number
};


class IntroDetail extends React.Component {
  render() {
    const {
      intro = '--',
      name = '--',
      url = 'javascript:;',
      stars = '--',
      repoName,
      html_url,
      watchers_count,
      stargazers_count,
      forks_count
    } = this.props;

    return (
      <div className="intro-detail">
        <div className="intro-name">
          {name}
        </div>

        <div className="intro-status">
          <a target="_blank" href={`https://www.npmjs.org/package/${repoName}`}>
            <img src={`https://img.shields.io/npm/v/${repoName}/version2.x.svg?style=flat-square`} />
          </a>
          <a target="_blank" href={`https://travis-ci.org/rsuite/${repoName}`}>
            <img src={'https://img.shields.io/badge/build-passing-green.svg?style=flat-square'} />
          </a>
        </div>
        <div className="intro-context">
          {intro}
        </div>

        <div className="intro-sub-intro">
          <a target="_blank" href={html_url}><i className="icon icon-star icon-lg"></i> {stargazers_count}</a>
          <a target="_blank" href={html_url}><i className="icon icon-code-fork icon-lg"></i> {forks_count}</a>
        </div>
      </div>
    );
  }
}

IntroDetail.propTypes = propTypes;


class IntroPanel extends React.Component {
  render() {
    const {
      bg,
      url = 'javascript:;',
      icon,
      ...props
    } = this.props;

    const style = {
      background: bg
    };

    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className="intro-panel hvr-icon-pop">
          <div className="avatar">
            <a href={url} target="_blank">
              <i className={`avatar-icon ${icon}`} style={style}></i>
            </a>
          </div>
          <IntroDetail
            {...props}
          />
        </div>
      </Col>
    );
  }
}

IntroPanel.propTypes = {
  url: PropTypes.string,
  intro: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
};

export default IntroPanel;