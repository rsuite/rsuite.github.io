### 外观

`appearance` 属性设置导航栏外观:
- 'default'(默认值) 默认导航栏。
- 'inverse'  反色的导航栏。
- 'subtle'  弱化的导航栏。

<!--start-code-->
```js

const SidenavInstance = ({...props})=>{
  return (
    <Sidenav {...props} style={{width:260}}>
      <Sidenav.Body>
        <Nav>
          <Nav.Item active icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
          <Nav.Item icon={<Icon icon="group" />}>User Group</Nav.Item>
          <Dropdown title="Advanced" icon={<Icon icon="magic" />}>
            <Dropdown.Item>Geo</Dropdown.Item>
            <Dropdown.Item>Devices</Dropdown.Item>
            <Dropdown.Item>Loyalty</Dropdown.Item>
            <Dropdown.Item>Visit Depth</Dropdown.Item>
          </Dropdown>
          <Dropdown title="Settings" icon={<Icon icon="gears" />}>
            <Dropdown.Item>Applications</Dropdown.Item>
            <Dropdown.Item>Channels</Dropdown.Item>
            <Dropdown.Item>Versions</Dropdown.Item>
            <Dropdown.Menu title="Custom Action">
              <Dropdown.Item >Action Name</Dropdown.Item>
              <Dropdown.Item >Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
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
