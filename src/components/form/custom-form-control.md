### 自定义表单组件

所有的 Data Entry 相关的组件都可以在表单中使用，例如 `Checkbox`,`SelectPicker`,`Slider` 等等。 但是需要通过 `FormControl` 组件进行数据管理，实现与 `Form` 组件的数据关联。

* FormControl 用于绑定 Form 中的数据字段，通过 `name` 属性和 Schema.Model 对象的 `key` 对应。
* FormControl 默认是个 `Input` 组件，可以通过 `accepter` 设置需要的数据录入组件。

> 例如: `<FormControl accepter={CheckboxGroup} />` , FormControl 会渲染一个 `<CheckboxGroup>` 组件, 同时与 Form 中的 Schema.Model 实例绑定。以下示例中的富文本编辑器，用的是 [react-quill](https://github.com/zenoamaro/react-quill)

<!--start-code-->

```js
const { ArrayType, StringType } = Schema.Types;
const model = Schema.Model({
  skills: ArrayType()
    .minLength(2, 'Please select at least 2 types of Skills.')
    .isRequired('This field is required.'),
  status: ArrayType()
    .minLength(2, 'Please select at least 2 types of Status.')
    .isRequired('This field is required.'),
  description: StringType().isRequired('This field is required.')
});

const CustomField = ({ name, message, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} errorMessage={error} {...props} />
    <HelpBlock>{message}</HelpBlock>
  </FormGroup>
);

const Editor = ({ onChange, defaultValue, ...props }) => {
  function handleChange(content) {
    onChange(content);
  }
  return (
    <ReactQuill
      style={{ width: 500, height: 200 }}
      theme="snow"
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

class CustomFieldForm extends React.Component {
  constructor(props) {
    super(props);
    const values = {
      skills: ['Node.js'],
      browser: 'Chrome',
      status: ['open'],
      description: 'Hello world !'
    };
    this.state = {
      values: values,
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
        <JSONView values={values} errors={errors} />
        <Form
          ref={ref => (this.form = ref)}
          onChange={values => {
            this.setState({ values });
            console.log('values', values);
          }}
          onCheck={errors => {
            this.setState({ errors });
            console.log('errors', errors);
          }}
          defaultValues={values}
          model={model}
        >
          <CustomField
            name="skills"
            label="Skills"
            accepter={CheckboxGroup}
            error={errors.skills}
            inline
          >
            <Checkbox value={'Node.js'}>Node.js</Checkbox>
            <Checkbox value={'CSS3'}>CSS3</Checkbox>
            <Checkbox value={'Javascript'}>Javascript</Checkbox>
            <Checkbox value={'HTML5'}>HTML5</Checkbox>
          </CustomField>

          <CustomField
            name="browser"
            label="Browser"
            accepter={RadioGroup}
            error={errors.browser}
            inline
          >
            <Radio value={'Chrome'}>Chrome</Radio>
            <Radio value={'FireFox'}>FireFox</Radio>
            <Radio value={'IE'}>IE</Radio>
          </CustomField>

          <CustomField
            name="status"
            label="Status"
            accepter={CheckPicker}
            error={errors.status}
            data={[
              { label: 'Todo', value: 'todo' },
              { label: 'Open', value: 'open' },
              { label: 'Close', value: 'close' },
              { label: 'Error', value: 'error' },
              { label: 'Processing', value: 'processing' },
              { label: 'Done', value: 'done' }
            ]}
          />

          <CustomField
            name="description"
            label="Description"
            accepter={Editor}
            error={errors.description}
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
