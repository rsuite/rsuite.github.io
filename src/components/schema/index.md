# Schema 

Schema 可以定义一个数据模型，用于对数据进行校验，可以对 `<Form>` 组件数据进行校验

* Schema.Model 定义数据模型对象
* Schema.Types 提供了一组数据类型：
  * StringType
  * NumberType
  * ArrayType
  * DateType
  * ObjectType
  * BooleanType

## 如何使用？

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

Output: `checkResult`

```js
{
  username: { hasError: false },
  email: { hasError: false },
  age: { hasError: true, errorMessage: '年应该在 18 到 30 岁' }
}
```

## 多重验证

```js
StringType()
  .minLength(6, '不能少于 6 个字符')
  .maxLength(30, '不能大于 30 个字符')
  .isRequired('该字段不能为空');
```

## 自定义验证

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

## 自定义动态错误信息

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

## Schema.Types

---

* `StringType`
* `NumberType`
* `ArrayType`
* `DateType`
* `ObjectType`
* `BooleanType`

### StringType

* isRequired()

```js
StringType().isRequired('该字段不能为空');
```

* isEmail(errorMessage: string)

```js
StringType().isEmail('请输入正确的邮箱地址');
```

* isURL(errorMessage: string)

```js
StringType().isURL('请输入正确的URL地址');
```

* isHex(errorMessage: string)

```js
StringType().isHex('请输入正确的十六进制值色号');
```

* isOneOf(items: Array&lt;string&gt;, errorMessage: string)

```js
StringType().isOneOf(['Javascript', 'CSS'], '只能输入 `Javascript`和 `CSS`');
```

* containsLetter(errorMessage: string)

```js
StringType().containsLetter('必须包含英文字符');
```

* containsUppercaseLetter(errorMessage: string)

```js
StringType().containsUppercaseLetter('必须包含大写的英文字符');
```

* containsLowercaseLetter(errorMessage: string)

```js
StringType().containsLowercaseLetter('必须包含小写的英文字符');
```

* containsLetterOnly(errorMessage: string)

```js
StringType().containsLetterOnly('只能包含的英文字符');
```

* containsNumber(errorMessage: string)

```js
StringType().containsNumber('必须包含数字');
```

* pattern(regexp: RegExp , errorMessage: string)

```js
StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, '请输入合法字符');
```

* rangeLength(minLength: number, maxLength: number, errorMessage: string)

```js
StringType().rangeLength(6, 30, '字符个数只能在 6 - 30 之间');
```

* minLength(minLength: number, errorMessage: string)

```js
StringType().minLength(6, '最小需要6个字符');
```

* maxLength(maxLength: number, errorMessage: string)

```js
StringType().minLength(30, '最大只能30个字符');
```

* addRule(onValid: (value: string)=>boolean, errorMessage: string)

```js
StringType().addRule(value => {
  return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, '请输入合法字符');
```

### NumberType

* isRequired()

```js
NumberType().isRequired('该字段必填');
```

* isInteger(errorMessage: string)

```js
NumberType().isInteger('只能是整型');
```

* isOneOf(items: Array&lt;number&gt;, errorMessage: string)

```js
NumberType().isOneOf([5, 10, 15], '只能是`5`,`10`,`15`');
```

* pattern(regexp: RegExp: , errorMessage: string)

```js
NumberType().pattern(/^[1-9][0-9]{3}$/, '请输入合法字符');
```

* range(minLength: number, maxLength: number, errorMessage: string)

```js
NumberType().range(18, 40, '请输入 18 - 40 之间的数字');
```

* min(min: number, errorMessage: string)

```js
NumberType().min(18, '最小值 18');
```

* max(min: number, errorMessage: string)

```js
NumberType().max(40, '最大值 40');
```

* addRule(onValid: (value:number) => boolean, errorMessage: string)

```js
NumberType().addRule(value => {
  return value % 5 === 0;
}, '请输入有效的数字');
```

### ArrayType

* isRequired()

```js
ArrayType().isRequired('该字段必填');
```

* rangeLength(minLength: number, maxLength: number, errorMessage: string)

```js
ArrayType().rangeLength(1, 3, '至少选择1个，但不能超过3个');
```

* minLength(minLength: number, errorMessage: string)

```js
ArrayType().minLength(1, '至少选择1个');
```

* maxLength(maxLength: number, errorMessage: string)

```js
ArrayType().maxLength(3, '不能超过3个');
```

* unrepeatable(errorMessage: string)

```js
ArrayType().unrepeatable('不能出现重复选项');
```

* of(type: Type, errorMessage: string)

```js
ArrayType().of(StringType().isEmail(), '格式错误');
```

* addRule(onValid: (value:Array&lt;any&gt;)=>boolean , errorMessage: string)

```js
ArrayType().addRule(value => {
  return value.length % 2 === 0;
}, '好事成双');
```

### DateType

* isRequired()

```js
DateType().isRequired('日期不能为空');
```

* range(min: Date, max: Date, errorMessage: string)

```js
DateType().range(
  new Date('08/01/2017'),
  new Date('08/30/2017'),
  '时间应该在 08/01/2017 - 08/30/2017 之间'
);
```

* min(min: Date, errorMessage: string)

```js
DateType().min(new Date('08/01/2017'), '时间的最小值 08/01/2017');
```

* max(max: Date, errorMessage: string)

```js
DateType().max(new Date('08/30/2017'), '时间的最大值 08/30/2017');
```

* addRule(onValid: (value: Date)=>boolean, errorMessage: string)

```js
DateType().addRule(value => {
  return value.getDay() === 2;
}, '只能选择周二');
```

### ObjectType

* isRequired()

```js
ObjectType().isRequired('该对象不能为空');
```

* shape(types: Object)

```js
ObjectType().shape({
  email: StringType().isEmail('应该是一个 email'),
  age: NumberType().min(18, '年龄应该大于18岁')
});
```

* addRule(onValid: (value: Object)=>boolean, errorMessage: string)

```js
ObjectType().addRule(value => {
  if (value.id || value.email) {
    return true;
  }
  return false;
}, 'id 与 email 必须有一个不能为空');
```

### BooleanType

* isRequired()

```js
BooleanType().isRequired('该字段不能为空');
```

* addRule(onValid: (value)=>boolean, errorMessage: string)

```js
BooleanType().addRule(value => {
  if (typeof value === 'undefined' && A === 10) {
    return false;
  }
  return true;
}, '当 A 等于 10 的时候，该值必须为空');
```
