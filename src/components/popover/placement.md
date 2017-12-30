### 位置

<!--start-code-->
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
      <Button>Top</Button>
    </Whisper>
    <Whisper placement="bottom" speaker={speaker}>
      <Button>Bottom</Button>
    </Whisper>
    <Whisper placement="left" speaker={speaker}>
      <Button>Left</Button>
    </Whisper>
    <Whisper placement="right" speaker={speaker}>
      <Button>Right</Button>
    </Whisper>

    <Whisper placement="right" speaker={speaker}>
      <Button appearance='link' >Link</Button>
    </Whisper>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
