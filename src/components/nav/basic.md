### 默认

<!--start-code-->
```js
const instance = (
  <Nav>
    <Nav.Item icon="home" >Home</Nav.Item>
    <Nav.Item>News</Nav.Item>
    <Nav.Item>Solutions</Nav.Item>
    <Nav.Item>Products</Nav.Item>
    <Nav.Dropdown title="About">
      <Nav.Item>Contact us</Nav.Item>
      <Nav.Item>Team</Nav.Item>
      <Nav.Item>Blog</Nav.Item>
    </Nav.Dropdown>
  </Nav>
);
ReactDOM.render(instance);
```
<!--end-code-->
