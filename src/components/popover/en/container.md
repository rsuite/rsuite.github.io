### Container

`Popover` renders inside the container and scrolls along with the button.

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
      <div
        style={{
          position: 'relative',
          height: 200,
          overflow: 'auto',
          background: '#f1f1f1',
          padding: 50
        }}
        ref={ref => {
          this.container = ref;
        }}
      >
        <div
          style={{
            height: 500
          }}
        >
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
      </div>
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
