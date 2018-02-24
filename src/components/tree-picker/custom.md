### 自定义选项

<!--start-code-->
```js
const instance=(
  <TreePicker
    defaultExpandAll
    data={data}
    renderTreeNode={(nodeData)=>{
      return <span><i className="icon icon-map-marker" /> {nodeData.label}</span>
    }}
    placeholder="选择地区"
    renderValue={(activeNode,placeholder)=>{
      return activeNode?(
        <span><i className="icon icon-map-marker" /> {activeNode.label}</span>
      ):placeholder
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->