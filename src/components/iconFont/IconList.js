import React from 'react';
import { FormControl, IconFont } from 'rsuite';

const ICONS = JSON.parse(require('fs').readFileSync(__dirname + '/icons.json', 'utf8'));

const IconItem = React.createClass({
    render(){
        return (
            <div className="icon-item col-md-3 col-sm-4">
                <IconFont {...this.props} className="icon-content"/>
                <p className="icon-name-text">{this.props.icon}</p>
            </div>
        )
    }
});

const NoneDom = () => <div className="col-md-12">无</div>;

export default React.createClass({
    getInitialState(){
        return ICONS;
    },
    handleSearch(key){
        const filter = (iconName) => iconName.indexOf(key.trim()) > -1;
        const icon = ICONS.icon.filter(filter);
        const fa = ICONS.fa.filter(filter);
        this.setState({
            icon, fa
        })
    },
    renderIcon(icons, classPrefix = ''){
        return icons.map((icon) => <IconItem icon={icon} key={icon} classPrefix={classPrefix}/>)
    },
    render(){
        const { icon, fa }=this.state;
        return (
            <div className="icon-list-wrap">
                <FormControl type='text'
                             placeholder="输入英文关键字进行搜索，比如 play"
                             onChange={this.handleSearch}/>
                <hr/>
                <h4>
                    <span className="page-header-en">
                        <code>classPrefix="icon"</code>
                    </span>
                </h4>
                <div className="row icon-item-list">
                    {icon.length > 0 ? this.renderIcon(icon, 'icon') : <NoneDom/>}
                </div>
                <h4>
                    <span className="page-header-en">
                        <code>classPrefix="fa"</code>
                    </span>
                </h4>
                <div className="row icon-item-list">
                    {fa.length > 0 ? this.renderIcon(fa, 'fa') : <NoneDom/>}
                </div>
            </div>
        );
    }
});
