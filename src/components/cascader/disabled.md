### 禁用

<!--start-code-->
```js
const instance=(
  <div>

    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      disabled
    />
    <hr />
    <p>禁用选项</p>
    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      defaultValue={'虹口区'}
      disabledItemValues={['北京', '广东', '天津']}
    />
  </div>
)
ReactDOM.render(instance);
```
<!--end-code-->