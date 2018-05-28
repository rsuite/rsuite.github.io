### 和按钮组合

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance = (
  <SelectPicker
    data={data}
    groupBy="role"
    placeholder="Select User"
    appearance="ghost"
    block
    toggleComponentClass={Button}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
