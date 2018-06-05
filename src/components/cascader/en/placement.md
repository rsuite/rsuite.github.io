### Placement

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const CustomCascader = ({ placement }) => (
  <Cascader
    data={data}
    placement={placement}
    placeholder={placement}
    valueKey="name"
    labelKey="name"
  />
);

const instance = (
  <div>
    <CustomCascader placement="topLeft" />
    <CustomCascader placement="bottomLeft" />
    <CustomCascader placement="autoVerticalLeft" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

> Tip: When set to `auto*`, try to scroll the page, or change the browser size, it will automatically appear in the right place.
