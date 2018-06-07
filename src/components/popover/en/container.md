### Container

Positioned popover components in scrolling container

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
          boxShadow: '#999 1px 1px 5px inset',
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
            <Button appearance="primary">Click</Button>
          </Whisper>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
