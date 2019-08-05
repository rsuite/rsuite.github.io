### Uncheckable

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <div>
    <CheckTreePicker
      defaultExpandAll
      data={data}
      block
      renderValue={(value, selectedItems) =>
        selectedItems.map(item => item.label).join(' , ')
      }
      uncheckableItemValues={[1, 3, 36]}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
