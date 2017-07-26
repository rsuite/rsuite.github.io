import React, { PropTypes } from 'react';
import { Col, Whisper, Tooltip } from 'rsuite';

const IntroDetail = React.createClass({
  propTypes: {
    intro: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    stars: PropTypes.number
  },
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
            <img src={`https://img.shields.io/npm/v/${repoName}.svg?style=flat-square`} />
          </a>
          <a target="_blank" href={`https://travis-ci.org/rsuite/${repoName}`}>
            <img src={`https://img.shields.io/travis/rsuite/${repoName}.svg?style=flat-square`} />
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
});


const IntroPanel = React.createClass({
  propTypes: {
    url: PropTypes.string,
    intro: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
  },
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

    console.log(props);


    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className='intro-panel'>
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
});

export default IntroPanel;
