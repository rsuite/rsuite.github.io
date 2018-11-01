# InputNumber 数字输入框

## 获取组件

```js
import { InputNumber } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<InputNumber>`

| 属性名称     | 类型 `(默认值)`                                                    | 描述                         |
| ------------ | ------------------------------------------------------------------ | ---------------------------- |
| classPrefix  | string `('input-number')`                                          | 组件 CSS 类的前缀            |
| min          | number `(-Infinity)`                                               | 最小值                       |
| max          | number `(Infinity)`                                                | 最大值                       |
| step         | number `(1)`                                                       | 每次改变步数，可以为小数     |
| value        | number                                                             | 设置值 `受控`                |
| defaultValue | number                                                             | 设置默认值                   |
| prefix       | React.Node                                                         | 前缀                         |
| postfix      | React.Node                                                         | 后缀                         |
| disabled     | boolean                                                            | 禁用                         |
| onChange     | (value: any, event: SyntheticInputEvent<HTMLInputElement>) => void | `value` 发生改变时的回调函数 |
| size         | enum: 'lg', 'md', 'sm', 'xs' `('md')`                              | 设置输入框尺寸               |
