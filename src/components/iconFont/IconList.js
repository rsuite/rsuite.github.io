import React from 'react';
import { FormControl, IconFont } from 'rsuite';

const ALL_ICONS = JSON.parse(require('fs').readFileSync(__dirname + '/icons.json', 'utf8'));

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
        return {
            icons: ALL_ICONS
        };
    },
    handleSearch(key){
        const filter = (iconName) => iconName.indexOf(key.trim()) > -1;
        const icons = ALL_ICONS.filter(filter);
        this.setState({
            icons
        })
    },
    renderIcon(icons, classPrefix = ''){
        return icons.map((icon) => <IconItem icon={icon} key={icon} classPrefix={classPrefix}/>)
    },
    render(){
        const { icons }=this.state;
        return (
            <div className="icon-list-wrap">
                <FormControl type='text'
                             placeholder="输入英文关键字进行搜索，比如 play"
                             onChange={this.handleSearch}/>
                <hr/>
                <div className="row icon-item-list">
                    {icons.length > 0 ? this.renderIcon(icons, 'icon') : <NoneDom/>}
                </div>
            </div>
        );
    }
});
