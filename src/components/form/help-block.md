### 帮助与错误消息

<!--start-code-->

```js
class HelpBlockDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false
    };
  }
  render() {
    const { showError } = this.state;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl name="email1" placeholder="Email" />
            <HelpBlock>设置你的安全邮箱地址</HelpBlock>
          </FormGroup>

          <FormGroup>
            <FormControl name="email2" placeholder="Email" />
            <HelpBlock tooltip>设置你的安全邮箱地址</HelpBlock>
          </FormGroup>

          <FormGroup>
            <FormControl name="email3" placeholder="Email" />
            <HelpBlock tooltip>设置你的安全邮箱地址</HelpBlock>
            <ErrorMessage show={showError}>该字段为必填项</ErrorMessage>
          </FormGroup>
        </Form>
        Show Error: <Toggle
          onChange={() => {
            this.setState({ showError: !showError });
          }}
          checked={showError}
        />
      </div>
    );
  }
}

ReactDOM.render(<HelpBlockDemo />);
```

<!--end-code-->
