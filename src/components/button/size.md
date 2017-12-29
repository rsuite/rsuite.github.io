### 按钮大小

`size` 属性设置按钮大小, 选项包括:`lg`、`md`、`sm`、`xs`

<!--start-code-->
```js
const instance = (
  <div>
    <ButtonToolbar>
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>
      <Button size="xs">Xsmall</Button>
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton icon="star" circle  size="lg" />
      <IconButton icon="star" circle  size="md" />
      <IconButton icon="star" circle  size="sm" />
      <IconButton icon="star" circle  size="xs" />
    </ButtonToolbar>

  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->