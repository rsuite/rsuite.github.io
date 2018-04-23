### Default

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
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