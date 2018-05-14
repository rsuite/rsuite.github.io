### Triggering events

There are three kinds of events that can trigger the message `Popover`: `click`、`focus`、`hover`

<!--start-code-->

```js
const speaker = (
  <Popover title="Title">
    <p>This is a defalut Popover </p>
    <p>Content</p>
  </Popover>
);

const instance = (
  <ButtonToolbar>
    <Whisper placement="top" trigger="click" speaker={speaker}>
      <Button>Click</Button>
    </Whisper>
    <Whisper placement="top" trigger="focus" speaker={speaker}>
      <Button>Focus</Button>
    </Whisper>
    <Whisper placement="top" trigger="hover" speaker={speaker}>
      <Button>Hover</Button>
    </Whisper>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```

<!--end-code-->

> Note: [Safari ignoring tabindex](https://stackoverflow.com/questions/1848390/safari-ignoring-tabindex)
