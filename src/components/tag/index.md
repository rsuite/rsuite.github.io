# Timeline 时间轴 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/timeline/index.md)

一个时间流信息显示组件

## 演示

<!--{demo}-->

## Props

### `<Tag>`

| 属性名称       | 类型`(默认值)`                             | 描述                                     |
| -------------- | ------------------------------------------ | ---------------------------------------- |
| componentClass | React.ElementType `('ul')`                 | 可以渲染 string 或者 function 的元素类型 |
| classPrefix    | string `('timeline')`                      | className 前缀                           |
| closable       | boolean                                    |
| onClose        | (event: SyntheticEvent&lt;any&gt;) => void | 点击关闭按钮的回调函数                   |
