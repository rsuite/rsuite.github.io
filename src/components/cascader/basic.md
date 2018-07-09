### 默认

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <Cascader
    data={data}
    valueKey="name"
    labelKey="name"
    style={{ width: 224 }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
