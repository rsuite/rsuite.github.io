### Disabled

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
    <p>Disabled Option</p>
    <CheckTreePicker defaultExpandAll data={data} disabledItemValues={[2]} style={{ width: 280 }} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
