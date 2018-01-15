### 外观

`appearance` 属性设置导航栏外观:
- 'default'(默认值) 默认导航栏。
- 'inverse'  反色的导航栏。
- 'subtle'  弱化的导航栏。

<!--start-code-->
```js

const NavBarInstance = ({...props})=>{
  return (
    <Navbar {...props}>
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
          <Nav.Item >Link Right</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}

const instance = (
  <div>
    <NavBarInstance />
    <hr />
    <NavBarInstance appearance="inverse" />
    <hr />
    <NavBarInstance appearance="subtle" />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
