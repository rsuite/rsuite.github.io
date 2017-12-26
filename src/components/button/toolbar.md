### 按钮工具栏

<!--start-code-->
```js
const instance = (
  <div>
    <ButtonToolbar>
      <Button>Prev</Button>
      <ButtonGroup >
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
      <Button>Next</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <IconButton icon="file-text"  />
      <IconButton icon="save"  />
      <ButtonGroup>
        <IconButton icon="bold"  />
        <IconButton icon="italic" />
        <IconButton icon="underline" />
        <IconButton icon="strikethrough" />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon="align-left"  />
        <IconButton icon="align-center" />
        <IconButton icon="align-right" />
        <IconButton icon="align-justify" />
      </ButtonGroup>
      <IconButton icon="chain"  />
    </ButtonToolbar>
  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->