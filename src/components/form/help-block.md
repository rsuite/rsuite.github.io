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
    const errorMessage = showError ? 'This field is required' : null;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl name="email" placeholder="Email" errorMessage={errorMessage} />
            <HelpBlock>Secure email Address</HelpBlock>
          </FormGroup>

          <FormGroup>
            <FormControl name="name" placeholder="Name" errorMessage={errorMessage} />
            <HelpBlock tooltip>This field is required</HelpBlock>
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
