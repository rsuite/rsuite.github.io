### 自定义 `Field`

<!--start-code-->
```js
const model = SchemaModel({
  skill: NumberType().isRequired('该字段不能为空')
});

const CustomField = ({ name, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <Field name={name} accepter={accepter} {...props} />
    <HelpBlock className={error ? 'error' : ''}>{error}</HelpBlock>
  </FormGroup>
);

class CustomFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        skill: 3,
      },
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
    const { errors, values } = this.state;
    return (
      <div>
        <Form
          ref={ref => this.form = ref}
          onChange={(values) => {
            this.setState({ values });
            console.log(values);
          }}
          onCheck={errors => this.setState({ errors })}
          defaultValues={values}
          model={model}
        >


          <CustomField
            name="skill"
            label="技能"
            accepter={Selectpicker}
            error={errors.skill}
            data={[
              { label: 'Node.js', value: 1 },
              { label: 'CSS3', value: 2 },
              { label: 'Javascript', value: 3 },
              { label: 'HTML5', value: 4 }
            ]}
          />
          <Button appearance="primary" onClick={this.handleSubmit}> 提交 </Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<CustomFieldForm />);

```
<!--end-code-->

如果一个组件不是原生表单控件，也不是 `RSuite` 库中提供的基础组件，要在 `form-lib` 中使用，应该怎么处理呢？

只需要在写这个组件的时候实现对应的 API 就可以了，

- `value` : 受控时候设置的值
- `defalutValue`: 默认值，非受控情况先设置的值
- `onChange`: 组件数据发生改变的回调函数
- `onBlur`: 在失去焦点的回调函数

接下来我们使用 `rsuite-selectpicker` 单选 作为示例, 在 `rsuite-selectpicker` 内部已经实现了这些 API。

