### 混入下拉按钮

<!--start-code-->
```js
const instance = (
  <div>
    <Nav pills >
      <Nav.Item active>Item A</Nav.Item>
      <Nav.Item>Item B</Nav.Item>
      <Nav.Item>Item C</Nav.Item>
      <Nav.Item>Item D</Nav.Item>
      <Nav.Dropdown
        title="Item E"
          onSelect={(value)=>{
          console.log(value)
        }}
      >
        <Nav.Item>Item E-1</Nav.Item>
        <Nav.Item>Item E-2</Nav.Item>
        <Nav.Item>Item E-3</Nav.Item>
        <Nav.Item>Item E-4</Nav.Item>
      </Nav.Dropdown>
    </Nav>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->