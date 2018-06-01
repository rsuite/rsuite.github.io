### Used with Popover

<!--start-code-->

```js
const Menu = () => (
  <Dropdown.Menu>
    <Dropdown.Item>New File</Dropdown.Item>
    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
    <Dropdown.Item>Download As...</Dropdown.Item>
    <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>About</Dropdown.Item>
  </Dropdown.Menu>
);

const MenuPopover = props => (
  <Popover {...props} full>
    <Menu />
  </Popover>
);

const instance = (
  <Whisper placement="bottomLeft" trigger="click" speaker={<MenuPopover />}>
    <Button>File</Button>
  </Whisper>
);
ReactDOM.render(instance);
```

<!--end-code-->
