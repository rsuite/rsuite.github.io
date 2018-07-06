### Appearance

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      appearance="default"
      placeholder="Default"
    />

    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      appearance="subtle"
      placeholder="Subtle"
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->