### 表单控件

所有的 Data Entry 相关的组件都可以在表单中使用，例如 `Checkbox`,`SelectPicker`,`Slider` 等等。 但是需要通过 `FormControl` 组件进行数据管理，实现与 `Form` 组件的数据关联。

* FormControl 用于绑定 Form 中的数据字段，通过 `name` 属性和 Schema.Model 对象的 `key` 对应。
* FormControl 默认是个 `Input` 组件，可以通过 `accepter` 设置需要的数据录入组件。

> 例如: `<FormControl accepter={CheckboxGroup} />` , FormControl 会渲染一个 `<CheckboxGroup>` 组件, 同时与 Form 中的 Schema.Model 实例绑定。

<!--start-code-->

```js
const model = Schema.Model({
  skill: Schema.Types.ArrayType()
    .minLength(2, '至少选择2个')
    .isRequired('该字段不能为空'),
  status: Schema.Types.ArrayType()
    .minLength(2, '至少选择2个')
    .isRequired('该字段不能为空')
});

const CustomField = ({ name, message, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} errorMessage={error} {...props} />
    <HelpBlock>{message}</HelpBlock>
  </FormGroup>
);

class CustomFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        skill: [0],
        browser: 0,
        status: [0]
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
          ref={ref => (this.form = ref)}
          onChange={values => {
            this.setState({ values });
            console.log(values);
          }}
          onCheck={errors => {
            this.setState({ errors });
            console.log(errors);
          }}
          defaultValues={values}
          model={model}
        >
          <CustomField
            name="skill"
            label="Skill"
            accepter={CheckboxGroup}
            error={errors.skill}
            inline
          >
            <Checkbox value={0}>Node.js</Checkbox>
            <Checkbox value={1}>CSS3</Checkbox>
            <Checkbox value={2}>Javascript</Checkbox>
            <Checkbox value={3}>HTML5</Checkbox>
          </CustomField>

          <CustomField
            name="browser"
            label="Browser"
            accepter={RadioGroup}
            error={errors.browser}
            inline
          >
            <Radio value={0}>Chrome</Radio>
            <Radio value={1}>FireFox</Radio>
            <Radio value={2}>IE</Radio>
          </CustomField>

          <CustomField
            name="status"
            label="Status"
            accepter={CheckPicker}
            error={errors.status}
            data={[
              { label: 'Todo', value: 0 },
              { label: 'Open', value: 1 },
              { label: 'Close', value: 2 },
              { label: 'Error', value: 3 },
              { label: 'Processing', value: 4 },
              { label: 'Done', value: 5 }
            ]}
          />

          <FormGroup>
            <Button appearance="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<CustomFieldForm />);
```

<!--end-code-->
