### 垂直布局
<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <ButtonGroup vertical>
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>

    <ButtonGroup vertical>
      <Button appearance="primary">Top</Button>
      <Button appearance="primary">Middle</Button>
      <Button appearance="primary">Bottom</Button>
    </ButtonGroup>

    <ButtonGroup vertical>
      <Button appearance="link">Top</Button>
      <Button appearance="link">Middle</Button>
      <Button appearance="link">Bottom</Button>
    </ButtonGroup>

    <ButtonGroup vertical>
      <Button appearance="subtle">Top</Button>
      <Button appearance="subtle">Middle</Button>
      <Button appearance="subtle">Bottom</Button>
    </ButtonGroup>

    <ButtonGroup vertical>
      <Button appearance="ghost">Top</Button>
      <Button appearance="ghost">Middle</Button>
      <Button appearance="ghost">Bottom</Button>
    </ButtonGroup>

  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->