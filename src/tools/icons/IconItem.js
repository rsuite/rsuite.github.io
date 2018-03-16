/**
 * Created by Godfery on 2017/3/24.
 */
import React from 'react';
import { Icon } from '../../rsuiteSource';
import Clipboard from 'rsuite-clipboard';

class IconItem extends React.Component {

  handleCopy = (text, result) => {
    const { handleCopy } = this.props;
    handleCopy && handleCopy(text, result);
  }

  render() {
    const { handleCopy, ...props } = this.props;
    return (
      <div className="icon-item rs-col-md-6 rs-col-sm-8">
        <Clipboard text={this.props.icon} onCopy={this.handleCopy}>
          <Icon {...props} className="icon-content"/>
        </Clipboard>
        <p className="icon-name-text">{this.props.icon}</p>
      </div>
    );
  }
}

export default IconItem;