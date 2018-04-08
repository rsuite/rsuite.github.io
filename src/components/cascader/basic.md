### 默认

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/resources/data/province.js
 */

const instance=(
  <Cascader
    data={data}
    valueKey="name"
    labelKey="name"
  />
)
ReactDOM.render(instance);
```
<!--end-code-->