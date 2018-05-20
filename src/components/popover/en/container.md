### Container

<!--start-code-->

```js
const speaker = (
  <Popover title="Title">
    <p>This is a defalut Popover </p>
    <p>Content</p>
  </Popover>
);

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div
          ref={ref => {
            this.container = ref;
          }}
        />
        <Whisper
          trigger="click"
          container={() => {
            return this.container;
          }}
          speaker={speaker}
        >
          <Button>Click</Button>
        </Whisper>
      </div>
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
