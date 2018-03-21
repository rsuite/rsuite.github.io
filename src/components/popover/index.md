# Popover 弹出框 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/popover/index.md)

鼠标点击/移入的时候，弹出的弹出框，用于显示更多内容。

* `<Popover>` 弹出框。
* `<Whisper>` 监听触发器，包裹被监听对象的外面，触发事件后通知到 `<Popover>` 展示出来。


## 获取组件

```js
import { Popover, Whisper } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Popover>`

| 属性名称    | 类型                 | 描述           |
| ----------- | -------------------- | -------------- |
| classPrefix | string `('popover')` | className 前缀 |
| title       | React.Node           | 标题           |

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


## 相关组件

* [`<Tooltip>`](./tooltip) 文字提示
* [`<Message>`](./message) 消息框
* [`<Alert`>](./alert) 提醒框
* [`<Notification>`](./notification) 通知框
