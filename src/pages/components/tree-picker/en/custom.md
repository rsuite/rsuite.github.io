### Custom Option

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <TreePicker
    defaultExpandAll
    data={data}
    style={{ width: 246 }}
    renderTreeNode={nodeData => {
      return (
        <span>
          <i className="rs-icon rs-icon-map-marker" /> {nodeData.label}
        </span>
      );
    }}
    placeholder="选择地区"
    renderValue={(value, item, selectedElement) => {

      return (
        <span>
          <i className="rs-icon rs-icon-map-marker" /> {item.label}
        </span>
      );
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
