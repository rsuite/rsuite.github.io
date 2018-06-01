### 和按钮组合

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      appearance="primary"
      toggleComponentClass={Button}
    />
    <hr />
    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      block
      toggleComponentClass={Button}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
