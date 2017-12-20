### 图标按钮

<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <IconButton icon="star" />
    <IconButton icon="star" shape="primary" />
    <IconButton icon="star" shape="primary" circle />
    <Button><Icon icon="star" /> Default</Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->