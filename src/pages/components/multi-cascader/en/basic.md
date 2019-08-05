### Default

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const instance = (
  <div>
    <h5>Cascade: </h5>
    <MultiCascader data={data} style={{ width: 224 }} />
    <hr />
    <h5>Not cascaded:</h5>
    <MultiCascader cascade={false} data={data} style={{ width: 224 }} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
