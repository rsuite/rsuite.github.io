### 没有小图标

设置一个 `noCaret` 属性。

```js
const instance = (
  <Dropdown shape='default' title="Default" noCaret>
    <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
    <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
    <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
    <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance);
```