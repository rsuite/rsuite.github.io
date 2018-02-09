# Popover 提示框 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/popover/index.md)

鼠标点击/移入的时候，弹出的提示框，用于显示更多内容。

- `<Popover>` 提示框。
- `<Whisper>` 监听触发器，包裹被监听对象的外面，触发事件后通知到 `<Popover>` 展示出来。

> 如果只需要代替系统默认的 title 提示，可以使用 `<Tooltip>` 组件。

## 演示

<!--{demo}-->


## Props

### `<Popover>`

| 属性名称    | 类型                 | 描述           |
| ----------- | -------------------- | -------------- |
| classPrefix | string `('popover')` | className 前缀 |
| title       | React.Node                 | 标题           |



### `<Whisper>`

| 属性名称     | 类型 `(默认值)`                                        | 描述                            |     |
| ------------ | ------------------------------------------------------ | ------------------------------- | --- |
| placement    | enum: 'top', 'right', 'bottom', 'left' `('right')`    | 显示位置                        |     |
| trigger      | union: 'click', 'hover', 'focus' `(['hover','focus'])` | 触发事件,可以通过数组配置多事件 |     |
| delay        | number                                                 | 延迟时间                        |     |
| delayShow    | number                                                 | 展示的延迟时间                  |     |
| delayHide    | number                                                 | 隐藏的延迟时间                  |     |
| speaker      | union: Tooltip, Popover                                | 展示的元素                      |     |
| onBlur       | () => void                                               | 失去焦点回调函数                |     |
| onClick      | () => void                                               | 点击的回调函数                  |     |
| onFocus      | () => void                                               | 获取焦点的回调函数              |     |
| onMouseLeave | () => void                                               | 鼠标离开的回调函数               |     |
