### 分割选项

设置一个 `divider` 属性分割选项。

<!--start-code-->
```js
const instance = (
  <Dropdown title="Default" >
    <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
    <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance);
```
<!--end-code-->