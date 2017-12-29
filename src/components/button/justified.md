### 等宽

按钮在按钮组中横向布局，并且等宽。

<!--start-code-->
```js
const instance = (
  <div>
    <ButtonGroup justified>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>

    <ButtonGroup justified>
      <Button appearance="primary">Left</Button>
      <Button appearance="primary">Middle</Button>
      <Button appearance="primary">Right</Button>
    </ButtonGroup>

    <ButtonGroup justified>
      <Button appearance="link">Left</Button>
      <Button appearance="link">Middle</Button>
      <Button appearance="link">Right</Button>
    </ButtonGroup>

    <ButtonGroup justified>
      <Button appearance="subtle">Left</Button>
      <Button appearance="subtle">Middle</Button>
      <Button appearance="subtle">Right</Button>
    </ButtonGroup>

    <ButtonGroup justified>
      <Button appearance="ghost">Left</Button>
      <Button appearance="ghost">Middle</Button>
      <Button appearance="ghost">Right</Button>
    </ButtonGroup>
  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->