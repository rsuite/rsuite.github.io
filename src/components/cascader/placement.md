### 位置

<!--start-code-->

```js
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
