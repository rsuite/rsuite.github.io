### 表单数据校验

表单校验需要用到 `<Form>`, `<FormControl>` 组件， 和 `Schema.Model` 。

* `<Form>` 定义一个表单，可以给表单设置 `value` 和 `model`，`model` 是由 `Schema.Model` 创建的数据模型。
* `<FormControl>` 定义一个 Filed，通过 `name` 属性和 `Schema.Model` 对象的 `key` 对应, 详细参考： 自定义表单组件。
* `Schema.Model` 定义一个数据模型，详细使用参考 [schema](/components/schema)。

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
      formValue: {
        name: '',
        email: '',
        age: ''
      },
      formError: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { formValue } = this.state;
    if (!this.form.check()) {
      console.log('数据格式有错误');
      return;
    }
    console.log(formValue, '提交数据');
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
