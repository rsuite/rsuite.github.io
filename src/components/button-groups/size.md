### 按钮组大小

`size` 属性设置按钮组大小, 选项包括:`lg`、`md`、`sm`、`xs`

<!--start-code-->
```js
const SIZES = ['lg', 'md', 'sm', 'xs'];

function renderButtonGroup(size, index) {
  return (
    <ButtonToolbar key={index} >
      <ButtonGroup size={size} >
        <Button shape="default">Left</Button>
        <Button shape="default">Middle</Button>
        <Button shape="default">Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
const instance = (
  <div>
    {SIZES.map(renderButtonGroup)}
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->