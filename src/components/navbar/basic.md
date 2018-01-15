### 默认

<!--start-code-->
```js
const instance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">RSUITE</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Body>
      <Nav>
        <Nav.Item active>Item A</Nav.Item>
        <Nav.Item>Item B</Nav.Item>
        <Nav.Item>Item C</Nav.Item>
        <Nav.Item disabled>Item D</Nav.Item>
        <Dropdown title="Item E">
          <Dropdown.Item>Item E-1</Dropdown.Item>
          <Dropdown.Item>Item E-2</Dropdown.Item>
          <Dropdown.Item>Item E-3</Dropdown.Item>
          <Dropdown.Item>Item E-4</Dropdown.Item>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item>Link Right</Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
