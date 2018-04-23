### 禁用

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <div>
    <CheckTreePicker data={data} disabled />
    <hr />
    <p>禁用选项</p>
    <CheckTreePicker defaultExpandAll data={data} disabledItemValues={[2]} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
