# Tooltip [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/tooltip/index.md)

- `<Tooltip>` 文字提示，可代替原生的 `title` 属性;
- `<Whisper>` 监听触发器，包裹被监听对象的外面，触发事件后通知到 `<Tooltip>` 展示出来。


## 演示

<!--{demo}-->

## API

### `<Tooltip>`

| 属性名称            | 类型               | 默认值       | 描述                                      |
|-----------------|------------------|-----------|-----------------------------------------|
| placement       | string           | `right`   | 位置，可选项：`top`, `right`, `bottom`, `left` |
| positionLeft    | number           |           | 相对 `left` 位置偏移量                         |
| positionTop     | number           |           | 相对 `top` 位置偏移量                          |
| classPrefix     | string           | `tooltip` |                                         |
| arrowOffsetLeft | number or string |           | 箭头相对 `left` 位置偏移量                       |
| arrowOffsetTop  | number or string |           | 箭头相对 `top` 位置偏移量                        |

### `<Whisper>`

| 属性名称                 | 类型       | 默认值                | 描述                                                                         |
|----------------------|----------|--------------------|----------------------------------------------------------------------------|
| placement            | string   | `right`            | 位置，可选项：`top`, `right`, `bottom`, `left`                                    |
| trigger              | string   | [`hover`, `focus`] | 触发事件 `click`, `hover`, `focus` or  array one of: `click`, `hover`, `focus` |
| delay                | number   |                    | 延迟时间                                                                       |
| delayShow            | number   |                    | 展示的延迟时间                                                                    |
| delayHide            | number   |                    | 隐藏的延迟时间                                                                    |
| speaker `isRequired` | element  |                    | 展示的元素，可选项：`Tooltip`, `Popover`                                             |
| onBlur               | function |                    | 失去焦点回调函数                                                                   |
| onClick              | function |                    | 点击的回调函数                                                                    |
| onFocus              | function |                    | 获取焦点的回调函数                                                                  |
| onMouseLeave         | function |                    | 鼠标离开的回调函数                                                                  |
