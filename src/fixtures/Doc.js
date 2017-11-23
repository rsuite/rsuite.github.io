import React from 'react';
import classnames from 'classnames';

class Doc extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classnames('doc-content', this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
};

export default Doc;

