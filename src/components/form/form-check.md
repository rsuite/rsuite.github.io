### 表单校验

> 表单校验需要用到 `FormControl` 组件，和 `Schema` API。

<!--start-code-->

```js
const model = Schema.Model({
  name: Schema.Types.StringType().isRequired('This field is required.'),
  email: Schema.Types.StringType().isEmail('Please enter a valid email address.'),
  age: Schema.Types.NumberType('Please enter a valid number.').range(
    18,
    30,
    'Please enter a number from 18 to 30'
  )
});

const TextField = ({ name, message, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} {...props} errorMessage={error} />
    <HelpBlock>{message}</HelpBlock>
  </FormGroup>
);

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        email: '',
        age: ''
      },
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { values } = this.state;
    if (!this.form.check()) {
      console.log('数据格式有错误');
      return;
    }
    console.log(values, '提交数据');
  }
  render() {
    const { errors, values } = this.state;
    return (
      <div>
        <JSONView values={values} errors={errors} />
        <Form
          ref={ref => (this.form = ref)}
          onChange={values => {
            this.setState({ values });
          }}
          onCheck={errors => {
            this.setState({ errors });
          }}
          values={values}
          model={model}
        >
          <TextField name="name" label="Username" error={errors.name} />
          <TextField name="email" label="Email" error={errors.email} />
          <TextField name="age" label="Age" error={errors.age} />

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
