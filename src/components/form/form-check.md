
### 表单校验

表单校验需要用到 `FormControl` 组件，和 `Schema` API。

<!--start-code-->
```js

const model = Schema.Model({
    name: Schema.Types.StringType().isRequired('用户名不能为空'),
    email: Schema.Types.StringType().isEmail('请输入正确的邮箱'),
    age: Schema.Types.NumberType('年龄应该是一个数字').range(18, 30, '年应该在 18 到 30 岁')
});

const TextField = ({ name, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} {...props} />
    <HelpBlock className={error ? 'error' : ''}>{error}</HelpBlock>
  </FormGroup>
);

class DefaultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
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
        <Form
          ref={ref => this.form = ref}
          onChange={(values) => {
            this.setState({ values });
            // 清除表单所有的错误信息
            this.form.cleanErrors();
          }}
          onCheck={(errors) => {
            this.setState({ errors });
          }}
          values={values}
          model={model}
        >
          <TextField name="name" label="Username" error={errors.name} />
          <TextField name="email" label="Email" error={errors.email} />
          <TextField name="age" label="Age" error={errors.age} />

          <Button  appearance="primary" onClick={this.handleSubmit}> Submit </Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<DefaultForm />);

```
<!--end-code-->
