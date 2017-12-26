### 默认

<!--start-code-->
```js
const instance = (
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
);
ReactDOM.render(instance);
```
<!--end-code-->
