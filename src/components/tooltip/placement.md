### 位置

<!--start-code-->
```js
const tooltip = (
  <Tooltip>
    This is a help <i>tooltip</i> .
  </Tooltip>
);
const instance = (
  <ButtonToolbar>
    <Whisper placement="top" speaker={tooltip} >
      <Button>Top</Button>
    </Whisper>
    <Whisper placement="bottom" speaker={tooltip}>
      <Button>Bottom</Button>
    </Whisper>
    <Whisper placement="left" speaker={tooltip}>
      <Button>Left</Button>
    </Whisper>
    <Whisper placement="right" speaker={tooltip}>
      <Button>Right</Button>
    </Whisper>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
