### 块级的 Dropdown

创建块级的 `Dropdown`，给组件设置一个 `block` 属性， 如果需要内容非居中，而是两端对齐，设置一个 `bothEnds` 属性。

```js
const instance = (
  <ButtonToolbar>
    <Dropdown shape='default' title="Default" block>
      <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
      <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
      <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
      <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
    </Dropdown>

    <Dropdown shape='default' title="Default" block bothEnds>
      <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
      <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
      <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
      <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
    </Dropdown>

  </ButtonToolbar>
);
ReactDOM.render(instance, mountNode);
```