
### SchemaModel 校验表单


#### 如何使用？

```js
import { SchemaModel } from 'rsuite';

const { StringType, DateType, NumberType } = SchemaModel;
const userModel = SchemaModel({
    username: StringType().isRequired('用户名不能为空'),
    email: StringType().isEmail('请输入正确的邮箱'),
    age: NumberType('年龄应该是一个数字').range(18, 30, '年应该在 18 到 30 岁')
});

const checkResult = userModel.check({
    username: 'foobar',
    email: 'foo@bar.com',
    age: 40
})

console.log(checkResult);
```

`checkResult` 返回结构是:

```js
{
    username: { hasError: false },
    email: { hasError: false },
    age: { hasError: true, errorMessage: '年应该在 18 到 30 岁' }
}
```

#### 多重验证

```js
StringType()
  .minLength(6,'不能少于 6 个字符')
  .maxLength(30,'不能大于 30 个字符')
  .isRequired('该字段不能为空');
```


#### 自定义验证
通过 `addRule` 函数自定义一个规则。

如果是对一个字符串类型的数据进行验证，可以通过 `pattern` 方法设置一个正则表达式进行自定义验证。

```js

const myModel = SchemaModel({
    field1: StringType().addRule((value) => {
        return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
    }, '请输入合法字符'),
    field2: StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, '请输入合法字符')
});
```

#### 自定义动态错误信息

例如，要通过 `value` 的不同情况，返回不同的错误信息，参考以下

```js
const myModel = SchemaModel({
    field1: StringType().addRule((value) => {
        if(value==='root'){
          return {
            hasError: true,
            errorMessage:'不能是关键字 root'
          }
        }else if(!/^[a-zA-Z]+$/.test(value)){
          return {
            hasError: true,
            errorMessage:'只能是英文字符'
          }
        }

        return {
            hasError: false
        }
    })
});
```

#### 示例

<!--start-code-->
```js
const TextareaField = createFormControl('textarea');
const SelectField = createFormControl('select');

const model = SchemaModel({
  name: StringType().isEmail('请输入正确的邮箱')
});

class DefaultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: 'abc',
        status: 0
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
            console.log(values);
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
          <div className="form-group">
            <label>邮箱: </label>
            <Field name="name" className="form-control" />
            <span className="help-block error" style={{ color: '#ff0000' }}>
              {errors.name}
            </span>
          </div>

          <div className="form-group">
            <label>状态: </label>
            <Field name="status" className="form-control" accepter={SelectField} >
              <option value={1}>启用</option>
              <option value={0}>禁用</option>
            </Field>
          </div>

          <div className="form-group">
            <label>描述 </label>
            <Field name="description" className="form-control" accepter={TextareaField} />
          </div>
          <button onClick={this.handleSubmit}> 提交 </button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<DefaultForm />);

```
<!--end-code-->

使用原生的表单元素时候，需要一个 `createFormControl` 函数创建一个表单组件，主要是重写组件的 `onChange` 方法，返回组件的值，而不是 `event` 对象。

数据校验使用 `rsuite-schema`。
