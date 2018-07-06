### Appearance

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance = (
  <div>
    <SelectPicker data={data} appearance="default" placeholder="Default" />
    <SelectPicker data={data} appearance="subtle" placeholder="Subtle" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
