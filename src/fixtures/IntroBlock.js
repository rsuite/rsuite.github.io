import React from 'react';
import PropTypes from 'prop-types';
import { Col, Whisper, Tooltip } from 'rsuite';

const tooltip = (
  <Tooltip>源码</Tooltip>
);

const propTypes = {
  thumb: PropTypes.string,
  url: PropTypes.string,
  intro: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string
};

class IntroBlock extends React.Component {
  render() {
    const {
      thumb,
      url = 'javascript:;',
      intro = '--',
      name = '--',
      src = 'javascript:;',
      icon
    } = this.props;

    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className='intro-block'>
          {thumb ? (
            <p className='thumb'>
              <a href={url} target='_blank'>
                <img src={thumb} />
              </a>
            </p>
          ) : null}

          {
            icon ? <p className="icon-wrapper"><i className={icon}></i></p> : null
          }

          <div className='intro-content'>
            <h4 className='info'>
              <a href={url} className='title' target='_blank'>{name}</a>
              <Whisper placement='top' speaker={tooltip}>
                <a className='code fa fa-code' href={src} target='_blank'></a>
              </Whisper>
            </h4>
            <p className='intro' title={intro}>{intro}</p>
          </div>
        </div>
      </Col>
    );
  }
}

IntroBlock.propTypes = propTypes;

export default IntroBlock;
