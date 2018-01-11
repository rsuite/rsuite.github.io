### 位置

<!--start-code-->
```js

const Speaker = ({content,...props})=>{
  return (
    <Popover title="Title" {...props}>
      <p>This is a Popover </p>
      <p>{content}</p>
    </Popover>
  )
}

const instance = (
  <ButtonToolbar>
    <Whisper
      placement="top"
      speaker={<Speaker content="I am positioned to the top" />}
    >
      <Button>Top</Button>
    </Whisper>
    <Whisper
      placement="bottom"
      speaker={<Speaker content="I am positioned to the bottom" />}
    >
      <Button>Bottom</Button>
    </Whisper>
    <Whisper
      placement="left"
      speaker={<Speaker content="I am positioned to the left" />}
    >
      <Button>Left</Button>
    </Whisper>
    <Whisper
      placement="right"
      speaker={<Speaker content="I am positioned to the right" />}
    >
      <Button>Right</Button>
    </Whisper>

  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
