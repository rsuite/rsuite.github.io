### 自定义触发校验

<!--start-code-->

```js
const model = Schema.Model({
  name: Schema.Types.StringType().isEmail('请输入正确的邮箱')
});

const CustomField = ({ name, label, message, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} {...props} />
    <HelpBlock>{message}</HelpBlock>
    <ErrorMessage show={!!error}>{error}</ErrorMessage>
  </FormGroup>
);

class CustomCheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkTrigger: 'blur',
      values: {},
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { values } = this.state;
    if (!this.form.check()) {
      console.error('数据格式有错误');
      return;
    }
    console.log(values, '提交数据');
  }

  render() {
    const { errors, values, checkTrigger } = this.state;
    return (
      <div>
        checkTrigger:
        <RadioGroup
          inline
          value={checkTrigger}
          onChange={checkTrigger => {
            this.setState({
              checkTrigger,
              errors: {}
            });
          }}
        >
          <Radio value="blur">blur</Radio>
          <Radio value="change">change</Radio>
          <Radio value="none">none</Radio>
        </RadioGroup>
        <hr />
        <Form
          ref={ref => (this.form = ref)}
          onChange={values => {
            this.setState({ values });
            console.log(values);
          }}
          onCheck={errors => {
            this.setState({ errors });
          }}
          defaultValues={values}
          model={model}
          checkTrigger={checkTrigger}
        >
          <CustomField name="name" label="邮箱" error={errors.name} message="请输入邮箱地址" />
          <Button appearance="primary" onClick={this.handleSubmit}>
            {' '}
            提交{' '}
          </Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<CustomCheckForm />);
```

<!--end-code-->

在某些情况下不需要对表单数据进行实时校验，可以自定义控制校验的方式，配置 `checkTrigger` 参数。

`checkTrigger` 默认值是 `'change'`， 选项包括：

* `'change'` : 数据改变 `onChange` 的时候会触发数据校验。
* `'blur'` : 组件失去焦点触发校验
* `'none'` : 不触发校验，只会在调用 `<Form>` 的 `check()` 方便的时候才会校验

还可以设置校验延迟时间 `checkDelay`, 默认值为 `500` 毫秒。
