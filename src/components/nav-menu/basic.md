### 默认

<!--start-code-->
```js
const instance = (
  <NavMenu>
    <NavMenu.Collapse>
      <Nav>
        <Nav.Item active>Item A</Nav.Item>
        <Nav.Item>Item B</Nav.Item>
        <Nav.Item>Item C</Nav.Item>
        <Nav.Item disabled>Item D</Nav.Item>
        <Nav.Dropdown title="Item E">
          <Nav.Item>Item E-1</Nav.Item>
          <Nav.Item>Item E-2</Nav.Item>
          <Nav.Item>Item E-3</Nav.Item>
          <Nav.Item>Item E-4</Nav.Item>
        </Nav.Dropdown>
      </Nav>
    </NavMenu.Collapse>
    <NavMenu.Toggle />
  </NavMenu>
);
ReactDOM.render(instance);
```
<!--end-code-->
