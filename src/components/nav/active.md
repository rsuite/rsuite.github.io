### 激活状态

<!--start-code-->
```js
const instance = (
  <div>
    <Nav>
      <Nav.Item >Default Item</Nav.Item>
      <Nav.Item active>Active Item</Nav.Item>
    </Nav>

    <Nav appearance="tabs">
      <Nav.Item >Default Item</Nav.Item>
      <Nav.Item active>Active Item</Nav.Item>
    </Nav>

    <Nav appearance="subtle">
      <Nav.Item >Default Item</Nav.Item>
      <Nav.Item active>Active Item</Nav.Item>
    </Nav>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
