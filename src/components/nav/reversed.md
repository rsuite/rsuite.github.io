### 颠倒方向

针对 subtle/tabs 导航，可以设置一个 `reversed` 属性颠倒方向，用来适配导航在上下左右都可以使用。

<!--start-code-->
```js
const instance = (
  <div>
    <Nav appearance="tabs" reversed>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="subtle" reversed>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="tabs" vertical reversed>
      <Nav.Item icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="subtle" vertical reversed>
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