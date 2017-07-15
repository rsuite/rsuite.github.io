
const MyModel = SchemaModel({
  username: StringType().isOneOf(['admin', 'root'], '只能输入admin,root这两个用户').isRequired('该字段必填'),
  email: StringType().isEmail('邮件格式错误'),
  radioList: StringType().isRequired('该字段必填'),
  radio: StringType().isRequired('该字段必填'),
  checkboxList: ArrayType().minLength(2, '至少选择2项').isRequired('该字段必填'),
  checkbox: StringType().isRequired('该字段必填')
});

const FormDemo = React.createClass({
  PropTypes: {
    errors: React.PropTypes.obejct,
    message: React.PropTypes.string,
    data: React.PropTypes.data
  },
  getInitialState() {
    return {
      data: {}
    };
  },
  handleSubmit() {
    const { formData, isValid } = this.refs.myForm.get();
    console.log(formData, isValid);
  },
  render() {

    return (
      <div className="container">
        <h1 className="page-title">表单验证</h1>
        <RSuiteForm ref="myForm"
          model={MyModel}
          errors={this.props.errors}
          formData={this.state.data}
        >
          <Field name="username" >
            <FormGroup>
              <ControlLabel>Text</ControlLabel>
              <FormControl type='text' />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
          </Field>

          <Field name="email" >
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl type='text' />
              <HelpBlock>邮件地址</HelpBlock>
            </FormGroup>
          </Field>



          <Field name="radioList" >
            <FormGroup>
              <ControlLabel>radioList</ControlLabel>
              <RadioGroup name="radioList">
                <Radio value="A">Item A</Radio>
                <Radio value="B">Item B</Radio>
                <Radio value="C">Item C</Radio>
              </RadioGroup>
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Field>



          <Field name="checkboxList" >
            <FormGroup>
              <ControlLabel>CheckboxGroup</ControlLabel>
              <CheckboxGroup name="radioList">
                <Checkbox value="A">Item A</Checkbox>
                <Checkbox value="B">Item B</Checkbox>
                <Checkbox value="C">Item C</Checkbox>
              </CheckboxGroup>
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Field>


          <Button shape="primary" onClick={this.handleSubmit}>提交</Button>
        </RSuiteForm>
      </div>
    );
  }
});

ReactDOM.render(<FormDemo />, mountNode);
