# Popover

When the mouse clicks/moves in, the pop-up pop-up box is used to display more content.

* `<Popover>` Pop-up box.
* `<Whisper>` Monitor triggers, wrap the outside of the listener object, and notify the `Tooltip` when the event is triggered.

## Usage

```js
import { Popover, Whisper } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Popover>`

| Property    | Type `(Default)`     | Description                         |
| ----------- | -------------------- | ----------------------------------- |
| classPrefix | string `('popover')` | The prefix for component CSS class. |
| children \* | React.Node           | The content of the component.       |
| title       | React.Node           | The title of the component.         |

### `<Whisper>`

| 属性名称     | 类型 `(默认值)`                                        | 描述                            |     |
| ------------ | ------------------------------------------------------ | ------------------------------- | --- |
| placement    | enum: [Placement](#Placement) `('top')`                | 显示位置                        |     |
| trigger      | union: 'click', 'hover', 'focus' `(['hover','focus'])` | 触发事件,可以通过数组配置多事件 |     |
| delay        | number                                                 | 延迟时间                        |     |
| delayShow    | number                                                 | 展示的延迟时间                  |     |
| delayHide    | number                                                 | 隐藏的延迟时间                  |     |
| speaker \*   | union: Tooltip, Popover                                | 展示的元素                      |     |
| onBlur       | () => void                                             | 失去焦点回调函数                |     |
| onClick      | () => void                                             | 点击的回调函数                  |     |
| onFocus      | () => void                                             | 获取焦点的回调函数              |     |
| onMouseLeave | () => void                                             | 鼠标离开的回调函数              |     |

## Types

### Placement

```js
type Placement =
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
