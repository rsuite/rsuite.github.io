### 分割菜单选项

设置一个 `divider` 属性分割选项。

<!--start-code-->
```js
const instance = (
  <Dropdown title="Profile" >
    <Dropdown.Item >Your profile</Dropdown.Item>
    <Dropdown.Item >Your stars</Dropdown.Item>
    <Dropdown.Item >Your Gists</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item >Help</Dropdown.Item>
    <Dropdown.Item >Settings</Dropdown.Item>
    <Dropdown.Item >Sign out</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance);
```
<!--end-code-->