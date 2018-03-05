# Tooltip 文字提示 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/tooltip/index.md)

用于辅助的文字提示，可代替 HTML 元素默认的 title 属性。

* `<Tooltip>` 文字提示。
* `<Whisper>` 监听触发器，包裹被监听对象的外面，触发事件后通知到 `<Tooltip>` 展示出来。

> 如果需要在提示信息中显示复杂的内容，可以使用 `<Popover>` 代替 `<Tooltip>` 组件

## 演示

<!--{demo}-->

## Props

### `<Tooltip>`

| 属性名称        | 类型 `(默认值)`      | 描述                       |
| --------------- | -------------------- | -------------------------- |
| positionLeft    | number               | 相对 `left` 位置偏移量     |
| positionTop     | number               | 相对 `top` 位置偏移量      |
| classPrefix     | string `('tooltip')` | className 前缀             |
| arrowOffsetLeft | number or string     | 箭头相对 `left` 位置偏移量 |
| arrowOffsetTop  | number or string     | 箭头相对 `top` 位置偏移量  |

### `<Whisper>`

| 属性名称     | 类型 `(默认值)`                                        | 描述                            |     |
| ------------ | ------------------------------------------------------ | ------------------------------- | --- |
| placement    | enum: Placement `('top')`                              | 显示位置                        |     |
| trigger      | union: 'click', 'hover', 'focus' `(['hover','focus'])` | 触发事件,可以通过数组配置多事件 |     |
| delay        | number                                                 | 延迟时间                        |     |
| delayShow    | number                                                 | 展示的延迟时间                  |     |
| delayHide    | number                                                 | 隐藏的延迟时间                  |     |
| speaker      | union: Tooltip, Popover                                | 展示的元素                      |     |
| onBlur       | () => void                                             | 失去焦点回调函数                |     |
| onClick      | () => void                                             | 点击的回调函数                  |     |
| onFocus      | () => void                                             | 获取焦点的回调函数              |     |
| onMouseLeave | () => void                                             | 鼠标离开的回调函数              |     |

## Types

### Placement

```js
Type Placement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```
