### 设置菜单位置

<!--start-code-->
```js

const items=[
  <Dropdown.Item key={1}>Item A</Dropdown.Item>,
  <Dropdown.Item key={2}>Item B</Dropdown.Item>,
  <Dropdown.Item key={3}>Item C</Dropdown.Item>,
  <Dropdown.Item key={4}>Item D</Dropdown.Item>,
];

const instance = (
  <div>
    <ButtonToolbar>
      <Dropdown title="TopLeft" placement="topLeft">
        {items}
      </Dropdown>

      <Dropdown title="TopCenter" placement="topCenter">
        {items}
      </Dropdown>

      <Dropdown title="TopRight" placement="topRight">
        {items}
      </Dropdown>
    </ButtonToolbar>

    <ButtonToolbar>
      <Dropdown title="BottomLeft" placement="bottomLeft">
        {items}
      </Dropdown>

      <Dropdown title="BottomCenter" placement="bottomCenter">
        {items}
      </Dropdown>

      <Dropdown title="BottomRight" placement="bottomRight">
        {items}
      </Dropdown>
    </ButtonToolbar>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->