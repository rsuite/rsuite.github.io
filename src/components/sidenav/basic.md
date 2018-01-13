### 默认

<!--start-code-->
```js
const instance = (
  <Sidenav>
    <Sidenav.Body>
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
    </Sidenav.Body>
    <Sidenav.Toggle />
  </Sidenav>
);
ReactDOM.render(instance);
```
<!--end-code-->
