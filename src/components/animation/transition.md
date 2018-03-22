### Transition 自定义过渡效果

在 Transition 中配置以下 className, 然后自定义相关 css 动画处理。

```
exitedClassName="custom-exited"
exitingClassName="custom-exiting"
enteredClassName="custom-entered"
enteringClassName="custom-entering"
```

<!--start-code-->

```js
const Panel = ({ ...props }) => (
  <div
    {...props}
    style={{
      background: '#000',
      width: 100,
      overflow: 'hidden'
    }}
  >
    <p>Panel</p>
    <p>Content Content Content</p>
  </div>
);

class TransitionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      show: true
    };
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="row">
        <Button onClick={this.handleToggle}>toggle</Button>
        <hr />
        <Transition
          exitedClassName="custom-exited"
          exitingClassName="custom-exiting"
          enteredClassName="custom-entered"
          enteringClassName="custom-entering"
          onEnter={() => {
            console.log('onEnter');
          }}
          onEntering={() => {
            console.log('onEntering');
          }}
          onEntered={() => {
            console.log('onEntered');
          }}
          onExit={() => {
            console.log('onExit');
          }}
          onExiting={() => {
            console.log('onExiting');
          }}
          onExited={() => {
            console.log('onExited');
          }}
          in={this.state.show}
        >
          <Panel />
        </Transition>
      </div>
    );
  }
}

ReactDOM.render(<TransitionDemo />);
```

<!--end-code-->
