### 外观

`appearance` 属性设置导航栏外观:
- 'default'(默认值) 默认导航栏。
- 'inverse'  反色的导航栏。
- 'subtle'  弱化的导航栏。

<!--start-code-->
```js

const NavBarInstance = ({...props})=>{
  return (
    <NavMenu {...props}>
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
}

const instance = (
  <div>
    <NavBarInstance />
    <NavBarInstance appearance="inverse" />
    <NavBarInstance appearance="subtle" />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
