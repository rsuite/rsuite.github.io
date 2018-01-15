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
        <a href="#" className="navbar-brand logo">RSUITE</a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
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
