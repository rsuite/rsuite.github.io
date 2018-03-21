### 自定义选项

<!--start-code-->

```js
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
