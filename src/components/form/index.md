# Form 表单

一组处理表单数据的组件和模型。

* `<Form>` 定义一个表单。
* `<FormControl>` 表单控件，定义一个表单字段。
* `<FormGroup>` 表单控件组，用于表单控件布局
* `<ControlLabel>` 表单控件对应的标题。
* `<HelpBlock>` 表单控件对应帮助信息。

## 获取组件

```js
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Form>`

| 名称             | 类型 `(默认值)`                                         | 描述                                               |
| ---------------- | ------------------------------------------------------- | -------------------------------------------------- |
| checkDelay       | number `(500)`                                          | 数据校验的时候，延迟处理，单位:毫秒                |
| checkTrigger     | enum: 'change','blur','none' `('change')`               | 触发表单校验的类型                                 |
| classPrefix      | string `('form')`                                       | 组件 CSS 类的前缀                                  |
| fluid            | boolean                                                 | 让表单中的 Input 100% 撑满容器，只在垂直布局中有效 |
| formDefaultValue | object                                                  | 表单的初始默认值 `非受控组件`                      |
| formError        | object                                                  | 表单错误信息                                       |
| formValue        | object                                                  | 表单的值 `受控组件`                                |
| layout           | enum: 'horizontal', 'vertical', 'inline' `('vertical')` | 设置表单内的元素左右两栏布局                       |
| model            | Schema                                                  | SchemaModel 对象                                   |
| onChange         | function(formValue:Object, event:Object)                | 数据改变后的回调函数                               |
| onCheck          | function(formError:Object)                              | 数据校验的回调函数                                 |
| onError          | function(formError:Object)                              | 校验出错的回调函数                                 |


### Form methods

-  check  检验表单数据

```js
check(callback: (formError: Object) => void) => boolean
```

-  checkForField 校验表单单个字段值

```js
checkForField = (fieldName: string, callback?: (checkResult: Object) => void) => boolean
```


-  cleanErrors 清除错误信息


```js
cleanErrors(callback: () => void) => void
```


### `<FormControl>`

| 名称           | 类型`(默认值)`                   | 描述                                       |
| -------------- | -------------------------------- | ------------------------------------------ |
| accepter       | React.ElementType `(Input)`      | 受代理的组件                               |
| checkTrigger   | enum: 'change','blur','none'     | 数据校验的触发类型,会覆盖 `<Form>`上的设置 |
| classPrefix    | string `('form-control')`        | 组件 CSS 类的前缀                          |
| errorMessage   | React.Node                       | 显示错误信息                               |
| errorPlacement | enum: Placement `('bottomLeft')` | 错误信息显示位置                           |
| name \*        | string                           | 表单元素名称                               |

### `<FormGroup>`

| 属性名称    | 类型`(默认值)`          | 描述              |
| ----------- | ----------------------- | ----------------- |
| classPrefix | string `('form-group')` | 组件 CSS 类的前缀 |
| controlId   | string                  | 设置控件的 ID     |

### `<ControlLabel>`

| 属性名称    | 类型`(默认值)`             | 描述                                                           |
| ----------- | -------------------------- | -------------------------------------------------------------- |
| classPrefix | string `('control-label')` | 组件 CSS 类的前缀                                              |
| htmlFor     | string                     | 对应 html label 标签的 for 属性，默认为 FormGroup 的 controlId |
| srOnly      | boolean                    | screen reader only                                             |

### `<HelpBlock>`

| 属性名称    | 类型`(默认值)`          | 描述                                                           |
| ----------- | ----------------------- | -------------------------------------------------------------- |
| classPrefix | string `('help-block')` | 组件 CSS 类的前缀                                              |
| htmlFor     | string                  | 对应 html label 标签的 for 属性，默认为 FormGroup 的 controlId |
| tooltip     | boolean                 | 是否通过 Tooltip 组件显示                                      |

```js
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```
