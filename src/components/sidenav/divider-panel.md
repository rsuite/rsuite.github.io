### 自定义侧导航

- 设置 `panel` 属性，可以自定义一个面板区域。
- 设置 `divider` 属性，设置一个分割线。

<!--start-code-->
```js
const panelStyles= {
  padding:'15px 20px',
  color:'#aaa',
}

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background:'#34c3ff',
  color:' #fff'
}

const instance = (
  <div style={{width:250}}>
    <Sidenav>
      <Sidenav.Body>
        <Nav>
          <Nav.Item panel style={headerStyles}>
            Custom Sidenav
          </Nav.Item>
          <Nav.Item divider />
          <Nav.Item active icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
          <Nav.Item icon={<Icon icon="group" />}>User Group</Nav.Item>
          <Dropdown title="Advanced" icon={<Icon icon="magic" />}>
            <Dropdown.Item panel style={panelStyles}>
              Reports
            </Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item>Geo</Dropdown.Item>
            <Dropdown.Item>Devices</Dropdown.Item>
            <Dropdown.Item>Loyalty</Dropdown.Item>
            <Dropdown.Item>Visit Depth</Dropdown.Item>
            <Dropdown.Item panel style={panelStyles}>
              Settings
            </Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item>Applications</Dropdown.Item>
            <Dropdown.Item>Channels</Dropdown.Item>
            <Dropdown.Item>Versions</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
