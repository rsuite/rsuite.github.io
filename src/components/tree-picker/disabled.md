### 禁用

<!--start-code-->
```js
const instance=(
  <div>
    <TreePicker
      data={data}
      disabled
    />
    <hr />
    <p>禁用选项</p>
    <TreePicker
      data={data}
      disabledItemValues={[2]}
    />

  </div>
)
ReactDOM.render(instance);
```
<!--end-code-->