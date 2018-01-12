### 垂直布局

<!--start-code-->
```js
const instance = (
  <div>
    <Nav vertical>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="tabs" vertical>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="subtle" vertical>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->