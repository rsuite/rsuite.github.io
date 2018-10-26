### 位置

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
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
