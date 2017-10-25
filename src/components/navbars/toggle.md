### 响应式

在小屏幕上 `Navbar.Collapse` 中的元素会隐藏， 可以设置一个 `Navbar.Toggle` 按钮，点击后展开被隐藏的元素。

```js
const instance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Suite</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Nav.Item active>Item A</Nav.Item>
        <Nav.Item>Item B</Nav.Item>
        <Nav.Item>Item C</Nav.Item>
        <Nav.Item disabled>Item D</Nav.Item>
        <Nav.Dropdown activeKey={0} select >
          <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>
          <Nav.Item eventKey={0} >Item E-2</Nav.Item>
          <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>
          <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>
        </Nav.Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item eventKey={1} href="#">Link Right</Nav.Item>
        <Nav.Item eventKey={2} href="#">Link Right</Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
ReactDOM.render(instance, mountNode);
```