### 禁用

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city-simplified.js
 */

const instance = (
  <div>
    <CheckTreePicker data={data} disabled style={{ width: 280 }} />
    <hr />
    <p>禁用选项</p>
    <CheckTreePicker
      defaultExpandAll
      data={data}
      disabledItemValues={[2]}
      style={{ width: 280 }}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
