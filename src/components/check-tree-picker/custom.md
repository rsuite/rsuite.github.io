### 自定义选项

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <CheckTreePicker
    defaultExpandAll
    data={data}
    placeholder={
      <span>
        <i className="icon icon-map-marker" /> 选择地区
      </span>
    }
    renderTreeNode={nodeData => {
      return (
        <span>
          <i className="icon icon-map-marker" /> {nodeData.label}
        </span>
      );
    }}
    renderValue={(value, checkedItems) => {
      return (
        <span>
          <span style={{ color: '#575757' }}>
            <i className="icon icon-map-marker" /> 地区 :
          </span>{' '}
          {checkedItems.map(item => item.label).join(' , ')}
        </span>
      );
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
