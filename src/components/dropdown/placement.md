### 设置菜单位置

<!--start-code-->
```js

const items=[
  <Dropdown.Item key={1}>New File</Dropdown.Item>,
  <Dropdown.Item key={2}>New File with Current Profile</Dropdown.Item>,
  <Dropdown.Item key={3}>Download As...</Dropdown.Item>,
  <Dropdown.Item key={4}>Export PDF</Dropdown.Item>,
  <Dropdown.Item key={5}>Export HTML</Dropdown.Item>,
  <Dropdown.Item key={6}>Settings</Dropdown.Item>,
  <Dropdown.Item key={7}>About</Dropdown.Item>,
];

const instance = (
  <ButtonToolbar>
    <Dropdown title="TopLeft" placement="topLeft">
      {items}
    </Dropdown>
    <Dropdown title="TopRight" placement="topRight">
      {items}
    </Dropdown>
    <Dropdown title="BottomLeft" placement="bottomLeft">
      {items}
    </Dropdown>
    <Dropdown title="BottomRight" placement="bottomRight">
      {items}
    </Dropdown>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->