### Placement

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const CustomMultiCascader = ({ placement }) => (
  <MultiCascader data={data} placement={placement} placeholder={placement} />
);

const instance = (
  <div>
    <CustomMultiCascader placement="topLeft" />{' '}
    <CustomMultiCascader placement="bottomLeft" />{' '}
    <CustomMultiCascader placement="autoVerticalLeft" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

> Tip: When set to `auto*`, try to scroll the page, or change the browser size, it will automatically appear in the right place.
