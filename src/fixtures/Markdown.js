import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Doc from './Doc';


const propTypes = {
  doc: PropTypes.bool
};

class Markdown extends React.Component {
  createMarkup = () => {
    return { __html: this.props.children };
  }
  render() {

    const { doc, className } = this.props;
    const Tag = doc ? Doc : 'div';

    return (
      <Tag
        dangerouslySetInnerHTML={this.createMarkup()}
        className={className || 'markdown'}
      />
    );
  }
}

Markdown.propTypes = propTypes;

export default Markdown;

