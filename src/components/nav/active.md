### 激活状态

<!--start-code-->
```js
const instance = (
  <div>
    <Nav>
      <Nav.Item active>Active Item</Nav.Item>
      <Nav.Item>Item B</Nav.Item>
      <Nav.Item>Item C</Nav.Item>
      <Nav.Item>Item D</Nav.Item>
      <Nav.Dropdown title="Active Dropdown" activeKey={1}>
        <Nav.Item eventKey={1}>Item E-1</Nav.Item>
        <Nav.Item>Item E-2</Nav.Item>
        <Nav.Item>Item E-3</Nav.Item>
        <Nav.Item>Item E-4</Nav.Item>
      </Nav.Dropdown>
    </Nav>

    <Nav appearance="tabs">
      <Nav.Item active>Item A</Nav.Item>
      <Nav.Item>Item B</Nav.Item>
      <Nav.Item>Item C</Nav.Item>
      <Nav.Item>Item D</Nav.Item>
      <Nav.Dropdown title="Item E">
        <Nav.Item>Item E-1</Nav.Item>
        <Nav.Item>Item E-2</Nav.Item>
        <Nav.Item>Item E-3</Nav.Item>
        <Nav.Item>Item E-4</Nav.Item>
      </Nav.Dropdown>
    </Nav>

    <Nav appearance="subtle">
      <Nav.Item active>Item A</Nav.Item>
      <Nav.Item>Item B</Nav.Item>
      <Nav.Item>Item C</Nav.Item>
      <Nav.Item>Item D</Nav.Item>
      <Nav.Dropdown title="Item E">
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
