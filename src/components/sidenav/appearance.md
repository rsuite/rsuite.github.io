### 外观

`appearance` 属性设置导航栏外观:
- 'default'(默认值) 默认导航栏。
- 'inverse'  反色的导航栏。
- 'subtle'  弱化的导航栏。

<!--start-code-->
```js

const SidenavInstance = ({...props})=>{
  return (
    <Sidenav {...props}>
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
}


const instance = (
  <div>
    <SidenavInstance />
    <SidenavInstance appearance="inverse" />
    <SidenavInstance appearance="subtle" />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
