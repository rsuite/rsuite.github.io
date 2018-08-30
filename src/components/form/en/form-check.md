### Form Data Check

Form Check needs to be used `<Form>`, `<FormControl>` and `Schema.Model` 。

* `<Form>` To define a form, you can set `value` and `model` for the form, and `model` is the data model created by `Schema.Model`.
* `<FormControl>` Define a Filed that corresponds to the `key` of the `Schema.Model` object via the `name` property. For detailed reference: Custom Form Components.
* `Schema.Model` Define a data model, using the reference [schema](/components/schema).

<!--start-code-->

```js
const model = Schema.Model({
  name: Schema.Types.StringType().isRequired('This field is required.'),
  email: Schema.Types.StringType().isEmail(
    'Please enter a valid email address.'
  ),
  age: Schema.Types.NumberType('Please enter a valid number.').range(
    18,
    30,
    'Please enter a number from 18 to 30'
  ),
  password: Schema.Types.StringType().isRequired('This field is required.'),
  verifyPassword: Schema.Types.StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const TextField = ({ name, message, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl
      name={name}
      accepter={accepter}
      {...props}
      errorMessage={error}
    />
    <HelpBlock>{message}</HelpBlock>
  </FormGroup>
);

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        email: '',
        age: '',
        password: '',
        verifyPassword: ''
      },
      formError: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { formValue } = this.state;
    if (!this.form.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  }
  render() {
    const { formError, formValue } = this.state;

    return (
      <div>
        <JSONView formValue={formValue} formError={formError} />
        <Form
          ref={ref => (this.form = ref)}
          onChange={formValue => {
            this.setState({ formValue });
          }}
          onCheck={formError => {
            this.setState({ formError });
          }}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Username" error={formError.name} />
          <TextField name="email" label="Email" error={formError.email} />
          <TextField name="age" label="Age" error={formError.age} />
          <TextField
            name="password"
            label="Password"
            type="password"
            error={formError.password}
          />

          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            error={formError.verifyPassword}
          />

          <Button appearance="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<CheckForm />);
```

<!--end-code-->
