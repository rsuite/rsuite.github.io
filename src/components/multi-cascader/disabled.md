### 禁用

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <MultiCascader data={data} style={{ width: 224 }} disabled />
    <hr />
    <p>禁用选项</p>
    <MultiCascader
      data={data}
      style={{ width: 224 }}
      disabledItemValues={['四川', '贵州', '西藏', '昆明市']}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
