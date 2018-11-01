### 默认

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance = (
  <div>
    <CheckPicker data={data} style={{ width: 224 }} />
    <hr />
    <CheckPicker
      data={data}
      style={{ width: 224 }}
      renderValue={(value, items) => value.join(' , ')}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
