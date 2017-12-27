import React from 'react';
import { FormControl, Icon } from '../../rsuiteSource';
import NotificationSystem from 'react-notification-system';
import IconItem from './IconItem';
import PageContainer from '../../components/PageContainer';


const ALL_ICONS = JSON.parse(require('fs').readFileSync(__dirname + '/icons.json', 'utf8'));

const parseIconByCategory = (obj, conf) => {
  conf.categories.forEach(category => {
    if (obj[category]) {
      obj[category].push(conf);
      return;
    }
    obj[category] = [conf];
  });
  return obj;
};

const NoneDom = () => <div className="col-md-12">无</div>;

class IconList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ALL_ICONS
    };
  }
  handleCopy = (text, result) => {
    const message = result ? '复制成功' : '复制失败，浏览器不支持此功能';
    this._notificationSystem.addNotification({
      message,
      autoDismiss: 1.5,
      position: 'tc',
      level: 'success'
    });
  }

  handleSearch = (key) => {
    key = key.toUpperCase();
    const filterByIconName = (searchKey) => {
      return searchKey.indexOf(key) > -1;
    };

    const filterByCatogry = (iconConf) => {
      const { id, filter = [], categories = [] } = iconConf;
      const searchKeys = [id, ...filter, ...categories].map(key => key.toUpperCase());
      return searchKeys.filter(filterByIconName).length > 0;
    };

    const icons = ALL_ICONS.filter(filterByCatogry);

    this.setState({
      icons
    });
  }
  renderIcon(icons) {
    icons = icons.reduce(parseIconByCategory, {});

    return Object.keys(icons).sort((a, b) => a.localeCompare(b)).map((category, i) => {
      return (
        <div key={i}>
          <h4 className="col-md-12">{category}</h4>
          {
            icons[category].map((iconConf, j) => {
              const { id: icon } = iconConf;
              return <IconItem icon={icon} key={`${j}-${icon}`} handleCopy={this.handleCopy} />;
            })
          }
        </div>
      );
    });
  }
  render() {
    const { icons } = this.state;
    return (

      <PageContainer className="icon-list-wrap">
        <FormControl
          type='text'
          placeholder="输入关键字进行搜索，如: hypers。然后点击图标，复制图标名称。"
          onChange={this.handleSearch}
        />
        <hr />
        <div className="row icon-item-list">
          {icons.length > 0 ? this.renderIcon(icons) : <NoneDom />}
        </div>
        <NotificationSystem ref={ref => this._notificationSystem = ref} />
      </PageContainer>
    );
  }
}

export default IconList;