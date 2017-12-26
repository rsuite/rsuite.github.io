### 分割菜单选项

设置一个 `divider` 属性分割选项。

<!--start-code-->
```js
const instance = (
  <Dropdown title="Divider" >
    <Dropdown.Item >Item A</Dropdown.Item>
    <Dropdown.Item >Item B</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item >Item D</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance);
```
<!--end-code-->