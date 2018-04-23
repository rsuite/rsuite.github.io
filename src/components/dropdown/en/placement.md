### Placement

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
  <table className="placement-table">
    <tbody>
      <tr>
        <td></td>
        <td>
          <Dropdown title="TopLeft" placement="topLeft">
            {items}
          </Dropdown>
        </td>
        <td>
          <Dropdown title="TopRight" placement="topRight">
            {items}
          </Dropdown>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Dropdown title="LeftTop" placement="leftTop">
            {items}
          </Dropdown>
        </td>
        <td></td>
        <td></td>
        <td>
          <Dropdown title="RightTop" placement="rightTop">
            {items}
          </Dropdown>
        </td>
      </tr>
      <tr>
        <td>

          <Dropdown title="LeftBottom" placement="leftBottom">
            {items}
          </Dropdown>
        </td>
        <td></td>
        <td></td>
        <td>
          <Dropdown title="RightBottom" placement="rightBottom">
            {items}
          </Dropdown>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Dropdown title="BottomLeft" placement="bottomLeft">
            {items}
          </Dropdown>
        </td>
        <td>

          <Dropdown title="BottomRight" placement="bottomRight">
            {items}
          </Dropdown>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

);
ReactDOM.render(instance);
```
<!--end-code-->