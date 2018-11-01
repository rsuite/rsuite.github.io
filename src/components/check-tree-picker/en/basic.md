### Default

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <div>
    <CheckTreePicker defaultExpandAll data={data} style={{ width: 280 }} />
    <hr />
    <CheckTreePicker
      defaultExpandAll
      data={data}
      style={{ width: 280 }}
      renderValue={(value, checkedItems) =>
        checkedItems.map(item => item.label).join(' , ')
      }
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
