/**
 * Created by Godfery on 2017/3/24.
 */
import React from 'react';
import { IconFont } from 'rsuite';
import Clipboard from 'rsuite-clipboard';

export default  React.createClass({
    prototypes: {},
    handleCopy(text, result){
        const { handleCopy } = this.props;
        handleCopy && handleCopy(text, result);
    },
    render(){
        const { handleCopy, ...props } = this.props;
        return (
            <div className="icon-item col-md-3 col-sm-4">
                <Clipboard text={this.props.icon} onCopy={this.handleCopy}>
                    <IconFont {...props} className="icon-content"/>
                </Clipboard>
                <p className="icon-name-text">{this.props.icon}</p>
            </div>
        );
    }
});
