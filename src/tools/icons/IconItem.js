/**
 * Created by Godfery on 2017/3/24.
 */
import React from 'react';
import classnames from 'classnames';
import { Icon } from 'rsuite';
import Clipboard from 'rsuite-clipboard';

class IconItem extends React.Component {
  handleCopy = (text, result) => {
    const { handleCopy } = this.props;
    handleCopy && handleCopy(text, result);
  };

  render() {
    const { handleCopy, newIcon, ...props } = this.props;
    return (
      <Clipboard text={this.props.icon} onCopy={this.handleCopy}>
        <div className={classnames('icon-item', { 'new-icon': newIcon })}>
          <div className="icon-wrapper">
            <Icon {...props} className="icon-content" />
          </div>
          <p className="icon-name-text">{this.props.icon}</p>
        </div>
      </Clipboard>
    );
  }
}

export default IconItem;
