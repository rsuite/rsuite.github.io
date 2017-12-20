### 自定选项

<!--start-code-->
```js

const instance = (
   <div>

    <Dropdown
      title="Default"
      renderTitle={(children)=>{
        return <Button>{children} </Button>
      }}
      >
        <Dropdown.Item eventKey="A" ><Icon icon="star" /> Item A</Dropdown.Item>
        <Dropdown.Item eventKey="B" ><Icon icon="star" /> Item B</Dropdown.Item>
        <Dropdown.Item eventKey="C" ><Icon icon="star" /> Item C</Dropdown.Item>
    </Dropdown>

    <Dropdown
      activeKey="B"
      renderTitle={(children)=>{
        return <div>Active: {children} </div>
      }}
    >
        <Dropdown.Item eventKey="A" ><Icon icon="star" /> Item A</Dropdown.Item>
        <Dropdown.Item eventKey="B" ><Icon icon="star" /> Item B</Dropdown.Item>
        <Dropdown.Item eventKey="C" ><Icon icon="star" /> Item C</Dropdown.Item>
    </Dropdown>
   </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
