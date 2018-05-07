# Tag 标签

## 获取组件

```js
import { Tag } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Tag>`

| 属性名称       | 类型`(默认值)`                             | 描述                   |
| -------------- | ------------------------------------------ | ---------------------- |
| componentClass | React.ElementType `('div')`                | 为组件自定义元素类型   |
| classPrefix    | string `('tag')`                           | className 前缀         |
| closable       | boolean                                    |
| children \*    | React.Node                                 | 组件的内容             |
| onClose        | (event: SyntheticEvent&lt;any&gt;) => void | 点击关闭按钮的回调函数 |
