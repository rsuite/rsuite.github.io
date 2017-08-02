### 默认

```js
const speaker = (
  <Popover title="Title">
    <p>This is a <code>Popover</code> </p>
    <p>This is a <code>Popover</code> </p>
  </Popover>
);

const instance = (
  <ButtonToolbar>
    <Whisper placement="top" speaker={speaker} >
      <Button shape='default' >Top</Button>
    </Whisper>
    <Whisper placement="bottom" speaker={speaker}>
      <Button shape='default' >Bottom</Button>
    </Whisper>
    <Whisper placement="left" speaker={speaker}>
      <Button shape='default' >Left</Button>
    </Whisper>
    <Whisper placement="right" speaker={speaker}>
      <Button shape='default' >Right</Button>
    </Whisper>

    <Whisper placement="right" speaker={speaker}>
      <Button shape='link' >Link</Button>
    </Whisper>
  </ButtonToolbar>
);
ReactDOM.render(instance, mountNode);
```
