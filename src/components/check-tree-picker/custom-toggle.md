### 和按钮组合

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <div>
    <CheckTreePicker
      data={data}
      appearance="primary"
      toggleComponentClass={Button}
    />
    <hr />
    <CheckTreePicker
      data={data}
      block
      toggleComponentClass={Button}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
