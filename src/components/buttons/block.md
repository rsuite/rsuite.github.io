
### 块级按钮

创建块级的按钮，给组件设置一个 `block` 属性

<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <Button shape='default' block>Block</Button>
    <Button shape='primary' block>Block</Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->