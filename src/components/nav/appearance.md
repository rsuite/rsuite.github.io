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
      <Nav.Item icon="home" >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="tabs">
      <Nav.Item icon="home" >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>

    <Nav appearance="subtle">
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
