### 设置图标

<!--start-code-->
```js
const instance = (
  <Nav>
    <Nav.Item icon="facebook-square" > facebook</Nav.Item>
    <Nav.Item icon="github-alt" >github</Nav.Item>
    <Nav.Item icon="circle"> amazon</Nav.Item>
    <Nav.Item icon="chrome" >chrome</Nav.Item>
    <Nav.Dropdown title={<span><Icon icon="ellipsis-h" /> more...</span>} >
      <Nav.Item icon="dropbox">dropbox</Nav.Item>
      <Nav.Item icon="firefox">firefox</Nav.Item>
      <Nav.Item icon="gitlab">gitlab</Nav.Item>
      <Nav.Item icon="linux">linux</Nav.Item>
    </Nav.Dropdown>
  </Nav>
);
ReactDOM.render(instance);
```
<!--end-code-->
