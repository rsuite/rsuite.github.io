# Form 表单 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/form/index.md)

一组处理表单数据的组件和模型。

* `<Form>` 定义一个表单。
* `<FormControl>` 表单控件，定义一个表单字段。
* `<FormGroup>` 表单控件组，用于表单控件布局
* `<ControlLabel>` 表单控件对应的标题。
* `<HelpBlock>` 表单控件对应帮助信息。

表单数据模型，数据数据校验：

* `Schema.Model` 定义数据模型对象
* `Schema.Types` 提供了一组数据类型：
  * `StringType`
  * `NumberType`
  * `ArrayType`
  * `DateType`
  * `ObjectType`
  * `BooleanType`

## 获取组件

```js
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Schema } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Form>`

| 名称          | 类型 `(默认值)`                                         | 描述                                |
| ------------- | ------------------------------------------------------- | ----------------------------------- |
| classPrefix   | string `('form')`                                       | className 前缀                      |
| layout        | enum: 'horizontal', 'vertical', 'inline' `('vertical')` | 设置表单内的元素左右两栏布局        |
| values        | object                                                  | 表单的值 `受控组件`                 |
| defaultValues | object                                                  | 表单的初始默认值 `非受控组件`       |
| model         | Schema                                                  | SchemaModel 对象                    |
| checkDelay    | number `(500)`                                          | 数据校验的时候，延迟处理，单位:毫秒 |
| checkTrigger  | enum: 'change','blur','none' `('change')`               | 触发表单校验的类型                  |
| onChange      | function(values:Object, event:Object)                   | 数据改变后的回调函数                |
| onError       | function(errors:Object)                                 | 校验出错的回调函数                  |
| onCheck       | function(errors:Object)                                 | 数据校验的回调函数                  |
| errors        | object                                                  | 表单错误信息                        |

---

> APIs

* check(callback: (errors: Object) => void) => void
* cleanErrors(callback: () => void) => void

### `<FormControl>`

| 名称         | 类型`(默认值)`               | 描述                                       |
| ------------ | ---------------------------- | ------------------------------------------ |
| classPrefix  | string `('form-control')`    | className 前缀                             |
| name         | string                       | 表单元素名称                               |
| accepter     | React.ElementType `(Input)`  | 受代理的组件                               |
| checkTrigger | enum: 'change','blur','none' | 数据校验的触发类型,会覆盖 `<Form>`上的设置 |
| errorMessage | React.Node                   | 显示错误信息                               |

### `<FormGroup>`

| 属性名称    | 类型`(默认值)`          | 描述           |
| ----------- | ----------------------- | -------------- |
| classPrefix | string `('form-group')` | className 前缀 |
| controlId   | string                  | 设置控件的 ID  |

### `<ControlLabel>`

| 属性名称    | 类型`(默认值)`             | 描述                                                           |
| ----------- | -------------------------- | -------------------------------------------------------------- |
| classPrefix | string `('control-label')` | className 前缀                                                 |
| htmlFor     | string                     | 对应 html label 标签的 for 属性，默认为 FormGroup 的 controlId |
| srOnly      | boolean                    | screen reader only                                             |

### `<HelpBlock>`

| 属性名称    | 类型`(默认值)`          | 描述                                                           |
| ----------- | ----------------------- | -------------------------------------------------------------- |
| classPrefix | string `('help-block')` | className 前缀                                                 |
| htmlFor     | string                  | 对应 html label 标签的 for 属性，默认为 FormGroup 的 controlId |
| tooltip     | boolean                 | 是否通过 Tooltip 组件显示                                      |

<br/>
<br/>

## `Schema.Model`

---

### 如何使用？

```js
import { Schema } from 'rsuite';

const userModel = Schema.Model({
  username: Schema.Types.StringType().isRequired('用户名不能为空'),
  email: Schema.Types.StringType().isEmail('请输入正确的邮箱'),
  age: Schema.Types.NumberType('年龄应该是一个数字').range(18, 30, '年应该在 18 到 30 岁')
});

const checkResult = userModel.check({
  username: 'foobar',
  email: 'foo@bar.com',
  age: 40
});

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

### 多重验证

```js
StringType()
  .minLength(6, '不能少于 6 个字符')
  .maxLength(30, '不能大于 30 个字符')
  .isRequired('该字段不能为空');
```

### 自定义验证

通过 `addRule` 函数自定义一个规则。

如果是对一个字符串类型的数据进行验证，可以通过 `pattern` 方法设置一个正则表达式进行自定义验证。

```js
const myModel = Schema.Model({
  field1: Schema.Types.StringType().addRule(value => {
    return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
  }, '请输入合法字符'),
  field2: Schema.Types.StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, '请输入合法字符')
});
```

### 自定义动态错误信息

例如，要通过 `value` 的不同情况，返回不同的错误信息，参考以下

```js
const myModel = Schema.Model({
  field1: Schema.Types.StringType().addRule(value => {
    if (value === 'root') {
      return {
        hasError: true,
        errorMessage: '不能是关键字 root'
      };
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return {
        hasError: true,
        errorMessage: '只能是英文字符'
      };
    }

    return {
      hasError: false
    };
  })
});
```

<br/>
<br/>
## `Schema.Types`
------
- `StringType`
- `NumberType`
- `ArrayType`
- `DateType`
- `ObjectType`
- `BooleanType`

### `StringType`

* isRequired()

```js
StringType().isRequired('该字段不能为空');
```

* isEmail(String: errorMessage)

```js
StringType().isEmail('请输入正确的邮箱地址');
```

* isURL(String: errorMessage)

```js
StringType().isURL('请输入正确的URL地址');
```

* isOneOf(Array: items, String: errorMessage)

```js
StringType().isOneOf(['Javascript', 'CSS'], '只能输入 `Javascript`和 `CSS`');
```

* containsLetter(String: errorMessage)

```js
StringType().containsLetter('必须包含英文字符');
```

* containsUppercaseLetter(String: errorMessage)

```js
StringType().containsUppercaseLetter('必须包含大写的英文字符');
```

* containsLowercaseLetter(String: errorMessage)

```js
StringType().containsLowercaseLetter('必须包含小写的英文字符');
```

* containsLetterOnly(String: errorMessage)

```js
StringType().containsLetterOnly('只能包含的英文字符');
```

* containsNumber(String: errorMessage)

```js
StringType().containsNumber('必须包含数字');
```

* pattern(Object: regexp, String: errorMessage)

```js
StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, '请输入合法字符');
```

* rangeLength(Number: minLength, Number: maxLength, String: errorMessage)

```js
StringType().rangeLength(6, 30, '字符个数只能在 6 - 30 之间');
```

* minLength(Number: minLength, String: errorMessage)

```js
StringType().minLength(6, '最小需要6个字符');
```

* maxLength(Number: maxLength, String: errorMessage)

```js
StringType().minLength(30, '最大只能30个字符');
```

* addRule(Function: onValid, String: errorMessage)

```js
StringType().addRule(value => {
  return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, '请输入合法字符');
```

### `NumbserType`

* isRequired()

```js
NumbserType().isRequired('该字段必填');
```

* isInteger(String: errorMessage)

```js
NumbserType().isInteger('只能是整型');
```

* isOneOf(Array: items, String: errorMessage)

```js
NumbserType().isOneOf([5, 10, 15], '只能是`5`,`10`,`15`');
```

* pattern(Object: regexp, String: errorMessage)

```js
NumbserType().pattern(/^[1-9][0-9]{3}$/, '请输入合法字符');
```

* range(Number: minLength, Number: maxLength, String: errorMessage)

```js
NumbserType().range(18, 40, '请输入 18 - 40 之间的数字');
```

* min(Number: min, String: errorMessage)

```js
NumbserType().min(18, '最小值 18');
```

* max(Number: min, String: errorMessage)

```js
NumbserType().max(40, '最大值 40');
```

* addRule(Function: onValid, String: errorMessage)

```js
NumbserType().addRule(value => {
  return value % 5 === 0;
}, '请输入有效的数字');
```

### `ArrayType`

* isRequired()

```js
ArrayType().isRequired('该字段必填');
```

* rangeLength(Number: minLength, Number: maxLength, String: errorMessage)

```js
ArrayType().rangeLength(1, 3, '至少选择1个，但不能超过3个');
```

* minLength(Number: minLength, String: errorMessage)

```js
ArrayType().minLength(1, '至少选择1个');
```

* maxLength(Number: maxLength, String: errorMessage)

```js
ArrayType().maxLength(3, '不能超过3个');
```

* unrepeatable(String: errorMessage)

```js
ArrayType().unrepeatable('不能出现重复选项');
```

* of(Object: type, String: errorMessage)

```js
ArrayType().of(StringType().isEmail(), '格式错误');
```

* addRule(Function: onValid, String: errorMessage)

```js
ArrayType().addRule(value => {
  return value.length % 2 === 0;
}, '好事成双');
```

### `DateType`

* isRequired()

```js
DateType().isRequired('日期不能为空');
```

* range(Date: min, Date: max, String: errorMessage)

```js
DateType().range(
  new Date('08/01/2017'),
  new Date('08/30/2017'),
  '时间应该在 08/01/2017 - 08/30/2017 之间'
);
```

* min(Date: min, String: errorMessage)

```js
DateType().min(new Date('08/01/2017'), '时间的最小值 08/01/2017');
```

* max(Date: max, String: errorMessage)

```js
DateType().max(new Date('08/30/2017'), '时间的最大值 08/30/2017');
```

* addRule(Function: onValid, String: errorMessage)

```js
DateType().addRule(value => {
  return value.getDay() === 2;
}, '只能选择周二');
```

### `ObjectType`

* isRequired()

```js
ObjectType().isRequired('该对象不能为空');
```

* shape(Object: types)

```js
ObjectType().shape({
  email: StringType().isEmail('应该是一个 email'),
  age: NumberType().min(18, '年龄应该大于18岁')
});
```

* addRule(Function: onValid, String: errorMessage)

```js
ObjectType().addRule(value => {
  if (value.id || value.email) {
    return true;
  }
  return false;
}, 'id 与 email 必须有一个不能为空');
```

### `BooleanType`

* isRequired()

```js
BooleanType().isRequired('该字段不能为空');
```

* addRule(Function: onValid, String: errorMessage)

```js
ObjectType().addRule(value => {
  if (typeof value === 'undefined' && A === 10) {
    return false;
  }
  return true;
}, '当 A 等于 10 的时候，该值必须为空');
```
