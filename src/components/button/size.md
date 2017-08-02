### 按钮大小

`size` 属性设置按钮大小, 选项包括:`lg`、`md`、`sm`、`xs`

```js
const instance = (
  <ButtonToolbar>
    <Button shape='default' size='lg'>Large</Button>
    <Button shape='default' size='md'>Medium</Button>
    <Button shape='default' size='sm'>Small</Button>
    <Button shape='default' size='xs'>Xsmall</Button>
  </ButtonToolbar>
);
ReactDOM.render(instance, mountNode);
```