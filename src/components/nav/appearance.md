### 外观


`appearance` 属性设置导航外观:
- 'default'(默认值) 默认导航。
- 'tabs' 标签式的导航。
- 'subtle' 弱化的导航。


<!--start-code-->
```js
const instance = (
  <div>
    <Nav>
      <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
    <br />
    <Nav appearance="tabs">
      <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
    <br />
    <Nav appearance="subtle">
      <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
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
