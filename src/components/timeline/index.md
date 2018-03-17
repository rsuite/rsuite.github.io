# Timeline 时间轴 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/timeline/index.md)

一个时间流信息显示组件

## 演示

<!--{demo}-->

## Props

### `<Timeline>`

| 属性名称       | 类型`(默认值)`             | 描述                                     |
| -------------- | -------------------------- | ---------------------------------------- |
| componentClass | React.ElementType `('ul')` | 为组件自定义元素类型 |
| classPrefix    | string `('timeline')`      | className 前缀                           |

### `<Timeline.Item>`

| 属性名称       | 类型`(默认值)`             | 描述                                     |
| -------------- | -------------------------- | ---------------------------------------- |
| componentClass | React.ElementType `('li')` | 为组件自定义元素类型 |
| classPrefix    | string `('timeline-item')` | className 前缀                           |
| dot            | React.Node                 | 自定义时间轴点                           |
