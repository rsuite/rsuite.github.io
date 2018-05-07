# Timeline 时间轴

一个时间流信息显示组件

## 获取组件

```js
import { Timeline } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Timeline>`

| 属性名称       | 类型`(默认值)`                           | 描述                 |
| -------------- | ---------------------------------------- | -------------------- |
| componentClass | React.ElementType `('ul')`               | 为组件自定义元素类型 |
| classPrefix    | string `('timeline')`                    | className 前缀       |
| children \*    | React.ChildrenArray&lt;Timeline.Item&gt; | 组件的内容           |

### `<Timeline.Item>`

| 属性名称       | 类型`(默认值)`             | 描述                 |
| -------------- | -------------------------- | -------------------- |
| componentClass | React.ElementType `('li')` | 为组件自定义元素类型 |
| classPrefix    | string `('timeline-item')` | className 前缀       |
| children \*    | React.Node                 | 组件的内容           |
| dot            | React.Node                 | 自定义时间轴点       |
