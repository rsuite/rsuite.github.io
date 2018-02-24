### 自定义选项

<!--start-code-->
```js
const instance=(
  <CheckTree
    defaultExpandAll
    data={data}
    renderTreeNode={(nodeData)=>{
      return <span><i className="icon icon-map-marker" /> {nodeData.label}</span>
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->