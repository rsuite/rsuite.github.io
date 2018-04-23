### 禁用搜索框

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance=(
  <CheckPicker
    data={data}
    searchable={false}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->