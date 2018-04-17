### Error Message

Error message can be set in 2 ways:

* The `<FormControl>` component passes an `errorMessage` property setting error message, and `errorPlacement` sets the location of the error message display.
* Customize a prompt message.

<!--start-code-->

```js
const errorPlacementData = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topRight', value: 'topRight' },
  { label: 'leftTop', value: 'leftTop' },
  { label: 'rightTop', value: 'rightTop' },
  { label: 'leftBottom', value: 'leftBottom' },
  { label: 'rightBottom', value: 'rightBottom' }
];

class ErrorMessageDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorPlacement: 'bottomLeft',
      showError: false
    };
  }
  render() {
    const { showError, errorPlacement } = this.state;
    const errorMessage = showError ? 'This field is required' : null;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl
              name="email"
              placeholder="Email"
              errorMessage={errorMessage}
              errorPlacement={errorPlacement}
            />
          </FormGroup>

          <FormGroup>
            <FormControl name="age" placeholder="Custom error messages" />
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
          onChange={checked => {
            this.setState({ showError: checked });
          }}
          checked={showError}
        />
        <SelectPicker
          value={errorPlacement}
          placeholder="errorPlacement"
          data={errorPlacementData}
          cleanable={false}
          onChange={value => {
            this.setState({ errorPlacement: value });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<ErrorMessageDemo />);
```

<!--end-code-->
