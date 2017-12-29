### 按钮组

<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button appearance="primary">Left</Button>
      <Button appearance="primary">Middle</Button>
      <Button appearance="primary">Right</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button appearance="link">Left</Button>
      <Button appearance="link">Middle</Button>
      <Button appearance="link">Right</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button appearance="subtle">Left</Button>
      <Button appearance="subtle">Middle</Button>
      <Button appearance="subtle">Right</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button appearance="ghost">Left</Button>
      <Button appearance="ghost">Middle</Button>
      <Button appearance="ghost">Right</Button>
    </ButtonGroup>

  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->