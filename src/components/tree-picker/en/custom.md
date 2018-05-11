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
    renderTreeNode={nodeData => {
      return (
        <span>
          <i className="icon icon-map-marker" /> {nodeData.label}
        </span>
      );
    }}
    placeholder="选择地区"
    renderValue={(activeNode, placeholder) => {
      return activeNode ? (
        <span>
          <i className="icon icon-map-marker" /> {activeNode.label}
        </span>
      ) : (
        placeholder
      );
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
