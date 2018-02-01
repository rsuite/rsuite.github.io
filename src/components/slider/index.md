# Slider 滑动输入控件 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/slider/index.md)

- `<Slider>` 滑动输入控件

## 演示

<!--{demo}-->

## API

### `<Slider>`

| 属性名称        | 类型`(默认值)`  | 描述                       |
| --------------- | --------------- | -------------------------- |
| min             | number`(0)`     | 滑动范围的最小值           |
| max             | number`(100)`   | 滑动范围的最大值           |
| step            | number`(1)`     | 滑动一步的值               |
| value           | number`(0)`     | 值                         |
| className       | string          | 自定义 class               |
| handleClassName | string          | 自定义手柄的 class         |
| handleTitle     | React.Node      | 自定义手柄内显示内容       |
| barClassName    | string          | 自定义滑动条 class         |
| disabled        | boolean         | 是否禁用                   |
| graduated       | boolean         | 是否显示标尺               |
| tooltip         | boolean`(true)` | 滑动时候，是否显示 tooltip |
| progress        | boolean         | 是否显示滑动的进度条       |
| vertical        | boolean         | 是否垂直滑动               |
