### Custom options

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/resources/data/city.js
 */

const instance = (
  <CheckTree
    data={data}
    renderTreeNode={nodeData => {
      return (
        <span>
          <Icon icon="map-marker" /> {nodeData.label}
        </span>
      );
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
