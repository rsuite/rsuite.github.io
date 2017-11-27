### 向上展开菜单

设置一个 `dropup` 属性。

```js
const instance = (
  <Dropdown shape='default' title="Default" dropup>
    <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
    <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
    <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
    <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance);
```