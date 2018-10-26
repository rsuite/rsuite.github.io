### 禁止选择

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <MultiCascader
      data={data}
      block
      renderValue={(value, items) => value.join(' , ')}
      uncheckableItemValues={['四川', '贵州', '西藏', '昆明市', '美兰区']}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
