# FlexboxGird 弹性栅格 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/flexbox-grid/index.md)

通过 CSS Flexbox 实现的栅格布局组件，提供 24 栅格。

* `<FlexboxGird>`
* `<FlexboxGird.Item>`

## 获取组件

```js
import { FlexboxGird } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<FlexboxGird>`

| 属性名称    | 类型`(默认值)`                                                               | 描述           |
| ----------- | ---------------------------------------------------------------------------- | -------------- |
| classPrefix | string `('flex-box-gird')`                                                   | className 前缀 |
| align       | enum: 'top' , 'middle' , 'bottom' `('top')`                                  | 对齐方式       |
| justify     | enum : 'start', 'end', 'center', 'space-around', 'space-between' `('start')` | 水平排列方式   |

### `<FlexboxGird.Item>`

| 属性名称    | 类型`(默认值)`                  | 描述               |
| ----------- | ------------------------------- | ------------------ |
| classPrefix | string `('flex-box-gird-item')` | className 前缀     |
| colspan     | number `(0)`                    | 栅格占位格数       |
| order       | number `(0)`                    | 栅格顺序，用于排序 |
