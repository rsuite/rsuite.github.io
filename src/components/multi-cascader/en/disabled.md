### Disabled

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <MultiCascader data={data} disabled style={{ widht: 224 }} />
    <hr />
    <p>Disabled Option</p>
    <MultiCascader
      data={data}
      disabledItemValues={['四川', '贵州', '西藏', '昆明市']}
      style={{ widht: 224 }}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
