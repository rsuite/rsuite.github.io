### 禁用状态

可以禁用整个组件，也可以禁用单个选项，只需配置 `disabled` 属性。

<!--start-code-->
```js
const instance = (
  <div>
    <Dropdown title="Disabled" disabled>
        <Dropdown.Item >Item A</Dropdown.Item>
        <Dropdown.Item >Item B</Dropdown.Item>
        <Dropdown.Item >Item C</Dropdown.Item>
    </Dropdown>
      <Dropdown title="Disabled Item" >
        <Dropdown.Item disabled>Item A</Dropdown.Item>
        <Dropdown.Item disabled>Item B</Dropdown.Item>
        <Dropdown.Item >Item C</Dropdown.Item>
    </Dropdown>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->

