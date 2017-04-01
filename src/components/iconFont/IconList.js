import React from 'react';
import { FormControl } from 'rsuite';
import NotificationSystem  from 'react-notification-system';
import IconItem from './IconItem';

const ALL_ICONS = JSON.parse(require('fs').readFileSync(__dirname + '/icons.json', 'utf8'));

const NoneDom = () => <div className="col-md-12">无</div>;

export default React.createClass({
    getInitialState(){
        return {
            icons: ALL_ICONS
        };
    },
    handleSearch(key){
        const filter = (iconName) => iconName.toUpperCase().indexOf(key.trim().toUpperCase()) > -1;
        const icons = ALL_ICONS.filter(filter);
        this.setState({
            icons
        });
    },
    handleCopy(text, result){
        const message = result ? '复制成功' : '复制失败，浏览器不支持此功能';
        this._notificationSystem.addNotification({
            message,
            autoDismiss: 1.5,
            position: 'tc',
            level: 'success'
        });
    },
    renderIcon(icons, classPrefix = ''){
        return icons.map(
            (icon) => {
                return <IconItem
                    icon={icon}
                    key={icon}
                    classPrefix={classPrefix}
                    handleCopy={this.handleCopy}/>;
            }
        );
    },
    render(){
        const { icons } = this.state;
        return (
            <div className="icon-list-wrap">
                <FormControl type='text'
                             placeholder="输入英文关键字进行搜索，比如 play。点击图标，复制图标名称。"
                             onChange={this.handleSearch}/>
                <hr/>
                <div className="row icon-item-list">
                    {icons.length > 0 ? this.renderIcon(icons, 'icon') : <NoneDom/>}
                </div>
                <NotificationSystem ref={ref => this._notificationSystem = ref}/>
            </div>
        );
    }
});
