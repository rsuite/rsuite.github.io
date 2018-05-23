import React from 'react';
import { Input, Icon, Alert } from 'rsuite';
import IconItem from './IconItem';

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

const NoneDom = () => <div className="rs-col-md-24">无</div>;

class IconList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allIcons: [],
      icons: []
    };
  }

  componentWillMount() {
    import('./icons').then(allIcons => {
      this.setState({
        allIcons: allIcons.default,
        icons: allIcons.default
      });
    });
  }

  handleCopy = (text, result) => {
    const message = result ? '复制成功' : '复制失败，浏览器不支持此功能';
    Alert.success(message);
  };

  handleSearch = key => {
    const { allIcons } = this.state;
    key = key.toUpperCase();
    const filterByIconName = searchKey => {
      return searchKey.indexOf(key) > -1;
    };

    const filterByCatogry = iconConf => {
      const { id, filter = [], categories = [] } = iconConf;
      const searchKeys = [id, ...filter, ...categories].map(key => key.toUpperCase());
      return searchKeys.filter(filterByIconName).length > 0;
    };

    const icons = allIcons.filter(filterByCatogry);

    this.setState({
      icons
    });
  };
  renderIcon(icons) {
    icons = icons.reduce(parseIconByCategory, {});

    return Object.keys(icons)
      .sort((a, b) => a.localeCompare(b))
      .map((category, i) => {
        return (
          <div key={i}>
            <h4 className="icon-list-group-title">{category}</h4>
            {icons[category].map((iconConf, j) => {
              const { id: icon } = iconConf;
              return <IconItem icon={icon} key={`${j}-${icon}`} handleCopy={this.handleCopy} />;
            })}
          </div>
        );
      });
  }
  render() {
    const { icons } = this.state;
    return (
      <div className="icon-list-wrap">
        <Input
          size="lg"
          className="icon-search-input"
          type="text"
          placeholder="搜索 Icon"
          onChange={this.handleSearch}
        />

        <div className="row icon-item-list">
          {icons.length > 0 ? this.renderIcon(icons) : <NoneDom />}
        </div>
      </div>
    );
  }
}

export default IconList;
