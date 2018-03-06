### 错误消息提醒

错误消息提醒可以通过 3 种方式设定：

* <FormControl> 组件上传递一个 errorMessage 属性。
* 在 <ErrorMessage> 组件上显示错误信息。
* 自定义一个提示信息。

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
    const errorMessage = showError ? 'This field is required' : null;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl name="email" placeholder="Email" errorMessage={errorMessage} />
          </FormGroup>

          <FormGroup>
            <FormControl name="name" placeholder="Name" />
            <ErrorMessage show={showError}>{errorMessage}</ErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormControl name="age" placeholder="Age" />
            <div
              style={{
                display: showError ? 'block' : 'none',
                color: 'red',
                marginTop: 6
              }}
            >
              {errorMessage}
            </div>
          </FormGroup>
        </Form>
        <hr />
        Show Error:{' '}
        <Toggle
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
