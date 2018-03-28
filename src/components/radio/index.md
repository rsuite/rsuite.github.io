# Radio 单选框 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/radio/index.md)

常用的单选框。 如果选项只有两个的情况下，也可以使用 Toggle 组件。

* `<Radio>`
* `<RadioGroup>`

## 获取组件

```js
import { Radio, RadioGroup } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Radio>`

| 属性名称       | 类型                                                             | 描述                                   |
| -------------- | ---------------------------------------------------------------- | -------------------------------------- |
| id             | React.ElementType                                                | 为组件自定义元素类型                   |
| name           | string                                                           | 用于表单对应的名称                     |
| inline         | boolean                                                          | 内联布局                               |
| title          | string                                                           | HTML title                             |
| disabled       | boolean                                                          | 禁用                                   |
| checked        | boolean                                                          | 被选中（受控）                         |
| defaultChecked | boolean                                                          | 默认被选中                             |
| onChange       | (value: any, checked: boolean, event: SyntheticInputEvent)=>void | checked 状态发生改变的回调函数         |
| inputRef       | React.ElementRef                                                 | 对应 input 元素的 ref                  |
| value          | any                                                              | 值，对应 RadioGroup 的值，判断是否选中 |

### `<RadioGroup>`

| 性名称       | 类型`(默认值)`                              | 描述               |
| ------------ | ------------------------------------------- | ------------------ |
| name         | string                                      | 用于表单对应的名称 |
| inline       | boolean                                     | 内联布局           |
| value        | any                                         | 值(受控)           |
| defaultValue | any                                         | 默认值             |
| onChange     | (value:any,event:SyntheticInputEvent)=>void | 值改变后的回调函数 |
