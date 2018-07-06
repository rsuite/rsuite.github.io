### Appearance

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance = (
  <div>
    <CheckPicker data={data} appearance="default" placeholder="Default" />
    <CheckPicker data={data} appearance="subtle" placeholder="Subtle" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
