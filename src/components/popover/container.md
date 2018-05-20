### 设置容器

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
          style={{
            height: 120,
            background: '#f1f1f1',
            padding: 10
          }}
          ref={ref => {
            this.container = ref;
          }}
        />
        <hr />
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
