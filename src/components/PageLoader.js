// form https://github.com/chikara-chan/react-laser-beam/blob/master/src/PageLoader.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

class PageLoader extends Component {
  constructor(props, context) {
    super(props, context);
    if (props.show === true) {
      console.warn(
        'To ensure ReactPageLoader work correctly. The initial prop "show" must be "false".'
      );
    }
    this.state = {
      style: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        margin: props.ccStyle === 'dash' ? '' : '0 auto',
        zIndex: props.zIndex,
        width: '0',
        height: props.width,
        background: props.background,
        transition: 'all 0ms',
        boxShadow: props.noShadow ? 'none' : props.background + ' 0px 0px 10px'
      },
      addonStyle: {
        content: '',
        display: 'none',
        position: 'absolute',
        right: -parseInt(props.width) / 2 + 'px',
        width: props.width,
        height: props.width,
        background: props.addon,
        boxShadow: props.addon + ' 0 0 10px ' + (2 / parseInt(props.width) + 1) + 'px',
        borderRadius: '50%'
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show || this.state.style !== nextState.style;
  }

  componentWillReceiveProps(nextProps) {
    const { style, addonStyle } = this.state;
    const { show } = this.props;
    const nextShow = nextProps.show;
    let changedStyle, changedAddonStyle;

    if (show === nextShow) {
      return;
    }
    if (nextShow) {
      changedStyle = assign({}, style, {
        width: '70%',
        transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
      });
    } else {
      changedStyle = assign({}, style, {
        width: '100%',
        transition: 'width 400ms ease'
      });
    }
    changedAddonStyle = assign({}, addonStyle, {
      display: 'block'
    });
    this.state.style = changedStyle;
    this.state.addonStyle = changedAddonStyle;
  }

  handleTransitionEnd() {
    const { style, addonStyle } = this.state;
    const { show } = this.props;
    let changedStyle, changedAddonStyle;

    if (!show) {
      changedStyle = assign({}, style, {
        width: '0',
        transition: 'width 0ms'
      });
      changedAddonStyle = assign({}, addonStyle, {
        display: 'none'
      });

      this.setState({
        style: changedStyle,
        addonStyle: changedAddonStyle
      });
    }
  }

  _renderAddon() {
    const { addonStyle } = this.state;
    const { ccStyle, width } = this.props;

    if (ccStyle === 'spread') {
      let rets = [];
      let changedAddonStyle;

      changedAddonStyle = assign({}, addonStyle, {
        left: -parseInt(width) / 2 + 'px',
        right: 0
      });
      rets.push(<div key="after" style={addonStyle} />);
      rets.push(<div key="before" style={changedAddonStyle} />);

      return rets;
    } else {
      return <div style={addonStyle} />;
    }
  }

  render() {
    const { style } = this.state;
    const { show, width, background, zIndex, noShadow, ccStyle, addon, ...props } = this.props;

    return (
      <div {...props} style={style} onTransitionEnd={this.handleTransitionEnd.bind(this)}>
        {this._renderAddon()}
      </div>
    );
  }
}

PageLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  width: PropTypes.string,
  background: PropTypes.string,
  zIndex: PropTypes.string,
  noShadow: PropTypes.bool,
  ccStyle: PropTypes.oneOf(['dash', 'spread']),
  addon: PropTypes.string
};

PageLoader.defaultProps = {
  show: false,
  width: '2px',
  background: '#77b6ff',
  zIndex: '1200',
  noShadow: false,
  ccStyle: 'dash',
  addon: 'transparent'
};

export default PageLoader;
