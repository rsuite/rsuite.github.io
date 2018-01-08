### 颠倒方向

针对 subtle/tabs 导航，可以设置一个 `reversed` 属性颠倒方向，用来适配导航在上下左右都可以使用。

<!--start-code-->
```js
const instance = (
  <div>
    <Nav appearance="tabs" reversed>
      <Nav.Item >Item A</Nav.Item>
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

    <Nav appearance="subtle" reversed>
      <Nav.Item>Item A</Nav.Item>
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

    <Nav appearance="tabs" vertical reversed>
      <Nav.Item >Item A</Nav.Item>
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

    <Nav appearance="subtle" vertical reversed>
      <Nav.Item>Item A</Nav.Item>
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