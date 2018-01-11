### 与按钮组合使用

<!--start-code-->
```js

const instance = (
   <ButtonToolbar>

    <ButtonGroup>
      <Button>Save</Button>
      <Dropdown
        placement="bottomRight"
        renderTitle={()=>{
          return <IconButton icon="angle-double-down" />
        }}
      >
        <Dropdown.Item icon="save" >Save as...</Dropdown.Item>
        <Dropdown.Item icon="save">Save & New</Dropdown.Item>
      </Dropdown>
    </ButtonGroup>

    <Dropdown
      renderTitle={()=>{
        return <IconButton icon="plus" placement="left"> New</IconButton>
      }}
    >
        <Dropdown.Item icon="user" >New User</Dropdown.Item>
        <Dropdown.Item icon="group" >New Group</Dropdown.Item>
        <Dropdown.Menu icon="group" title="More">
          <Dropdown.Item icon="user" >New User</Dropdown.Item>
          <Dropdown.Item icon="group" >New Group</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
