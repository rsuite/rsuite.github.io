# Popover [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/popover/index.md)

- `<Popover>` 气泡提示框;
- `<Whisper>` 监听触发器，包裹被监听对象的外面，触发事件后通知到 `<Popover>` 展示出来。

> 如果只需要代替系统默认的 title 提示，可以使用 `<Tooltip>` 组件。

## 演示

<!--{demo}-->


## API

### `<Popover>`

| 属性名称        | 类型     | 默认值       | 描述                                      |
|-------------|--------|-----------|-----------------------------------------|
| placement   | string | `right`   | 位置，可选项：`top`, `right`, `bottom`, `left` |
| classPrefix | string | `popover` |                                         |
| title       | node   |           | 标题                              |



### `<Whisper>`

| 属性名称         | 类型                                      | 默认值               | 描述               |     |
|--------------|-----------------------------------------|-------------------|------------------|-----|
| placement    | union: 'top', 'right', 'bottom', 'left' | 'right'           | 位置，可选项：          |     |
| trigger      | union: 'click', 'hover', 'focus'        | ['hover','focus'] | 触发事件,可以通过数组配置多事件 |     |
| delay        | number                                  |                   | 延迟时间             |     |
| delayShow    | number                                  |                   | 展示的延迟时间          |     |
| delayHide    | number                                  |                   | 隐藏的延迟时间          |     |
| speaker      | union: `<Tooltip>`,`<Popover>`          |                   | 展示的元素            |     |
| onBlur       | function                                |                   | 失去焦点回调函数         |     |
| onClick      | function                                |                   | 点击的回调函数          |     |
| onFocus      | function                                |                   | 获取焦点的回调函数        |     |
| onMouseLeave | function                                |                   | 鼠标离开的回调函数        |     |
