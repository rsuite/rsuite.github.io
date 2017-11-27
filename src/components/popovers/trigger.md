### 触发方式

有三种方式可以触发提示 `Popover` 的信息: `click`、`focus`、`hover`

```js
const speaker = (
  <Popover title="Title">
    <p>This is a <code>Popover</code> </p>
    <p>This is a <code>Popover</code> </p>
  </Popover>
);

const instance = (
  <ButtonToolbar>
    <Whisper placement="top" trigger="click" speaker={speaker}>
      <Button shape='default' >Click</Button>
    </Whisper>
    <Whisper placement="top" trigger="focus" speaker={speaker}>
      <Button shape='default' >Focus</Button>
    </Whisper>
    <Whisper placement="top" trigger="hover" speaker={speaker}>
      <Button shape='default' >Hover</Button>
    </Whisper>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
