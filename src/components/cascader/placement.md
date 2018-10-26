### 位置

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const CustomCascader = ({ placement }) => (
  <Cascader data={data} placement={placement} placeholder={placement} />
);

const instance = (
  <div>
    <CustomCascader placement="topLeft" />{' '}
    <CustomCascader placement="bottomLeft" />{' '}
    <CustomCascader placement="autoVerticalLeft" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
