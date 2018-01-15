# Form 表单 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/form/index.md)

一组处理表单的组件和方法。


表单基础控件

- `<Form>`
- `<Form.Field>`
- `<FormGroup>`
- `<FormControl>`  表单组件，支持文本框，多行文本框，下拉框等，通过 `type` 配置
- `<ControlLabel>` 表单组件显示文本
- `<HelpBlock>` 帮助提醒，一般会放在表单控件下面，提醒或者警告输入的内容
- `<InputGroup>` 自定义 Input

静态类及方法

- `Form.createFormControl`
- `SchemaModel`
- `SchemaModel.StringType`
- `SchemaModel.NumberType`
- `SchemaModel.ArrayType`
- `SchemaModel.DateType`
- `SchemaModel.ObjectType`
- `SchemaModel.BooleanType`


## 获取组件


```js
import { Form, FormGroup, FormControl, ControlLabel, SchemaModel  } from 'rsuite';

const { Field, createFormControl } = Form;
const { StringType, NumberType, ArrayType, DateType, ObjectType, BooleanType } = SchemaModel;

```



## 演示

<!--{demo}-->



## API


### `<Form>`

| 名称            | 类型                                    | 描述                      |
|---------------|---------------------------------------|-------------------------|
| horizontal    | boolean                               | 设置表单内的元素左右两栏布局          |
| inline        | boolean                               | 设置表单内元素在一行布局            |
| values        | object                                | 表单的值 `受控组件`             |
| defaultValues | object                                | 表单的初始默认值 `非受控组件`        |
| model         | Schema                                | SchemaModel 对象          |
| checkDelay    | number                                | 数据校验的时候，延迟处理，默认为 500 毫秒 |
| checkTrigger  | enum: 'change','blur',null           | 默认为：'change'            |
| onChange      | function(values:Object, event:Object) | 数据改变后的回调函数              |
| onError       | function(errors:Object)               | 校验出错的回调函数               |
| onCheck       | function(errors:Object)               | 数据校验的回调函数               |
| errors        | object                                | 表单错误信息                  |

### `<Form.Field>`

| 名称           | 类型                          | 描述                         |
|--------------|-----------------------------|----------------------------|
| name         | string                      | 表单元素名称                     |
| accepter     | React.ElementType           | 受代理的组件                     |
| checkTrigger | enum: 'change','blur',null | 数据校验的触发类型,会覆盖 `<Form>`上的设置 |


### `<FormGroup>`

| 属性名称            | 类型                                 | 默认值 | 描述  |
|-----------------|------------------------------------|-----|-----|
| controlId       | string                             |     |     |
| validationState | enum: 'success','warning','error' |     |     |

### `<ControlLabel>`

| 属性名称    | 类型      | 默认值   | 描述  |
|---------|---------|-------|-----|
| htmlFor | string  |       |     |
| srOnly  | boolean | false |     |

### `<FormControl>`

| 属性名称           | 类型                                                                  | 默认值    | 描述  |
|----------------|---------------------------------------------------------------------|--------|-----|
| componentClass | React.ElementType                                                   |        |     |
| type           | enum:'text','email','number','file','select','textarea','password' | 'text' |     |
| id             | string                                                              |        |     |



### `SchemaModel`

#### `StringType`
- isRequired()

```js
StringType().isRequired('该字段不能为空');
```
- isEmail(String: errorMessage)

```js
StringType().isEmail('请输入正确的邮箱地址');
```
- isURL(String: errorMessage)

```js
StringType().isURL('请输入正确的URL地址');
```
- isOneOf(Array: items, String: errorMessage)

```js
StringType().isOneOf(['Javascript','CSS'],'只能输入 `Javascript`和 `CSS`');
```
- containsLetter(String: errorMessage)

```js
StringType().containsLetter('必须包含英文字符');
```
- containsUppercaseLetter(String: errorMessage)

```js
StringType().containsUppercaseLetter('必须包含大写的英文字符');
```
- containsLowercaseLetter(String: errorMessage)

```js
StringType().containsLowercaseLetter('必须包含小写的英文字符');
```
- containsLetterOnly(String: errorMessage)

```js
StringType().containsLetterOnly('只能包含的英文字符');
```
- containsNumber(String: errorMessage)

```js
StringType().containsNumber('必须包含数字');
```
- pattern(Object: regexp, String: errorMessage)

```js
StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, '请输入合法字符')
```
- rangeLength(Number: minLength, Number: maxLength, String: errorMessage)

```js
StringType().rangeLength(6, 30, '字符个数只能在 6 - 30 之间')
```
- minLength(Number: minLength, String: errorMessage)

```js
StringType().minLength(6, '最小需要6个字符')
```
- maxLength(Number: maxLength, String: errorMessage)

```js
StringType().minLength(30, '最大只能30个字符')
```
- addRule(Function: onValid, String: errorMessage)

```js
StringType().addRule((value) => {
  return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, '请输入合法字符')
```

#### `NumbserType`
- isRequired()

```js
NumbserType().isRequired('该字段必填')
```
- isInteger(String: errorMessage)

```js
NumbserType().isInteger('只能是整型')
```
- isOneOf(Array: items, String: errorMessage)

```js
NumbserType().isOneOf([5,10,15],'只能是`5`,`10`,`15`')
```
- pattern(Object: regexp, String: errorMessage)

```js
NumbserType().pattern(/^[1-9][0-9]{3}$/, '请输入合法字符')
```
- range(Number: minLength, Number: maxLength, String: errorMessage)

```js
NumbserType().range(18, 40, '请输入 18 - 40 之间的数字')
```
- min(Number: min, String: errorMessage)

```js
NumbserType().min(18, '最小值 18')
```
- max(Number: min, String: errorMessage)

```js
NumbserType().max(40, '最大值 40')
```
- addRule(Function: onValid, String: errorMessage)

```js
NumbserType().addRule((value) => {
  return value % 5 ===0;
}, '请输入有效的数字')
```

#### `ArrayType`
- isRequired()

```js
ArrayType().isRequired('该字段必填')
```
- rangeLength(Number: minLength, Number: maxLength, String: errorMessage)

```js
ArrayType().rangeLength(1, 3, '至少选择1个，但不能超过3个')
```
- minLength(Number: minLength, String: errorMessage)

```js
ArrayType().minLength(1, '至少选择1个')
```
- maxLength(Number: maxLength, String: errorMessage)

```js
ArrayType().maxLength(3, '不能超过3个')
```
- unrepeatable(String: errorMessage)

```js
ArrayType().unrepeatable('不能出现重复选项')
```
- of(Object: type, String: errorMessage)

```js
ArrayType().of(StringType().isEmail(), '格式错误');
```
- addRule(Function: onValid, String: errorMessage)

```js
ArrayType().addRule((value) => {
  return value.length % 2 ===0;
}, '好事成双')
```

#### `DateType`
- isRequired()

```js
DateType().isRequired('日期不能为空');
```

- range(Date: min, Date: max, String: errorMessage)

```js
DateType().range(
  new Date('08/01/2017'),
  new Date('08/30/2017'),
  '时间应该在 08/01/2017 - 08/30/2017 之间'
);
```

- min(Date: min, String: errorMessage)

```js
DateType().min(
  new Date('08/01/2017'),
  '时间的最小值 08/01/2017'
);
```

- max(Date: max, String: errorMessage)

```js
DateType().max(
  new Date('08/30/2017'),
  '时间的最大值 08/30/2017'
);
```

- addRule(Function: onValid, String: errorMessage)

```js
DateType().addRule((value) => {
  return value.getDay()===2;
}, '只能选择周二')
```

#### `ObjectType`

- isRequired()

```js
ObjectType().isRequired('该对象不能为空');
```

- shape(Object: types)

```js
ObjectType().shape({
  email: StringType().isEmail('应该是一个 email'),
  age: NumberType().min(18, '年龄应该大于18岁')
})
```

- addRule(Function: onValid, String: errorMessage)

```js
ObjectType().addRule((value) => {
   if(value.id || value.email){
     return true;
   }
   return false;
}, 'id 与 email 必须有一个不能为空')
```

#### `BooleanType`
- isRequired()

```js
BooleanType().isRequired('该字段不能为空');
```

- addRule(Function: onValid, String: errorMessage)

```js
ObjectType().addRule((value) => {
  if(typeof value === 'undefined' && A === 10){
    return false;
  }
  return true;
}, '当 A 等于 10 的时候，该值必须为空');
```
