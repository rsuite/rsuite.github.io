# Checkbox 多选框 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/checkbox/index.md)

常用的多选框。

* `<Checkbox>`
* `<CheckboxGroup>`

## 获取组件

```js
import { Checkbox, CheckboxGroup } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Checkbox>`

| 属性名称       | 类型 `(默认值)`                                                  | 描述                                         |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| id             | React.ElementType                                                | 为组件自定义元素类型                         |
| name           | string                                                           | 用于表单对应的名称                           |
| inline         | boolean                                                          | 内联布局                                     |
| title          | string                                                           | HTML title                                   |
| disabled       | boolean                                                          | 禁用                                         |
| checked        | boolean                                                          | 被选择（受控）                               |
| defaultChecked | boolean                                                          | 默认被选择                                   |
| onChange       | (value: any, checked: boolean, event: SyntheticInputEvent)=>void | checked 状态发生改变的回调函数               |
| inputRef       | React.ElementRef                                                 | 对应 input 元素的 ref                        |
| value          | any                                                              | 值，对应 CheckboxGroup 的值，判断是否选中    |
| indeterminate  | boolean                                                          | 作为一个全选框时，子项部分被选择后的样式设置 |

### `<CheckboxGroup>`

| 性名称       | 类型 `(默认值)`         | 描述               |
| ------------ | ----------------------- | ------------------ |
| name         | string                  | 用于表单对应的名称 |
| inline       | boolean                 | 内联布局           |
| value        | Array                   | 值(受控)           |
| defaultValue | Array                   | 默认值             |
| onChange     | (value:any,event)=>void | 值改变后的回调函数 |
