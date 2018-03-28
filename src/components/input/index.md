# Input 输入框 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/input/index.md)

代替 HTML 原生控件，input、textarea。

* `<Input>` 输入框组件
* `<InputGroup>` 输入框组合组件
* `<InputGroup.Button>` 与按钮组合
* `<InputGroup.Addon>` 自定义附加元素

## 获取组件

```js
import { Input, InputGroup } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Input>`

| 属性名称     | 类型 `(默认值)`                                                    | 描述                     |
| ------------ | ------------------------------------------------------------------ | ------------------------ |
| classPrefix  | string `('input')`                                                 | class 前缀               |
| type         | string `('text' )`                                                 | HTML input type.         |
| value        | number                                                             | 设置值 `受控`            |
| defaultValue | number                                                             | 设置默认值               |
| onChange     | (value: any, event: SyntheticInputEvent<HTMLInputElement>) => void | value 发生变化的回调函数 |
| disabled     |                                                                    | 禁用                     |

### `<InputGroup>`

| 属性名称    | 类型 `(默认值)`          | 描述           |
| ----------- | ------------------------ | -------------- |
| classPrefix | string `('input-group')` | class 前缀     |
| inside      | boolean                  | 组合内容在内部 |
