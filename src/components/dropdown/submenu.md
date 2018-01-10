### 多级菜单

<!--start-code-->
```js
const instance = (
  <div>
     <Dropdown title="File">
        <Dropdown.Item>New</Dropdown.Item>
        <Dropdown.Item>Open...</Dropdown.Item>
        <Dropdown.Item>Save as...</Dropdown.Item>
        <Dropdown.Item>Rename</Dropdown.Item>
        <Dropdown.Item>Make a copy</Dropdown.Item>
        <Dropdown.Item><Icon icon="folder"/> Move to folder</Dropdown.Item>
        <Dropdown.Item><Icon icon="trash"/> Move to trash</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Menu title="Publish to Web">
          <Dropdown.Menu title="Google">
            <Dropdown.Item>Google Docs</Dropdown.Item>
            <Dropdown.Item>Google Drive</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Dropbox</Dropdown.Item>
          <Dropdown.Item>Private FTP</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item>Download As...</Dropdown.Item>
        <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
    </Dropdown>

    <Dropdown title="File" placement="bottomRight">
        <Dropdown.Item>New</Dropdown.Item>
        <Dropdown.Item>Open...</Dropdown.Item>
        <Dropdown.Item>Save as...</Dropdown.Item>
        <Dropdown.Item>Rename</Dropdown.Item>
        <Dropdown.Item>Make a copy</Dropdown.Item>
        <Dropdown.Item><Icon icon="folder"/> Move to folder</Dropdown.Item>
        <Dropdown.Item><Icon icon="trash"/> Move to trash</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Menu title="Publish to Web" pullLeft>
          <Dropdown.Menu title="Google" pullLeft>
            <Dropdown.Item>Google Docs</Dropdown.Item>
            <Dropdown.Item>Google Drive</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Dropbox</Dropdown.Item>
          <Dropdown.Item>Private FTP</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item>Download As...</Dropdown.Item>
        <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
    </Dropdown>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
