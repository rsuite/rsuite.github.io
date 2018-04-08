### 位置

<!--start-code-->

```js

/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/resources/data/province.js
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
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
