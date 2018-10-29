### 禁止选择

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const instance = (
  <div>
    <MultiCascader
      data={data}
      block
      renderValue={(value, items) => value.join(' , ')}
      uncheckableItemValues={['1', '2-1']}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
