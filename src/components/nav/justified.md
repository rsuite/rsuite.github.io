### 宽度自适应

<!--start-code-->
```js
const instance = (
  <div>
    <Nav justified>
      <Nav.Item icon="home" >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="tabs" justified>
      <Nav.Item icon="home" >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="subtle" justified>
      <Nav.Item icon="home" >Home</Nav.Item>
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