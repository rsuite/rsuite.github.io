### 块级按钮

添加属性 `block`，把按钮组设置为块级元素

```js
const instance = (
  <ButtonGroup vertical block>
    <Button shape="default">Top</Button>
    <Button shape="default">Middle</Button>
    <Button shape="default">Bottom</Button>
  </ButtonGroup>
);
ReactDOM.render(instance);
```