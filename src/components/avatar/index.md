# Avatar 头像

## 获取组件

```js
import { Avatar } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Badge>`

| 属性名称    | 类型`(默认值)`                        | 描述                         |
| ----------- | ------------------------------------- | ---------------------------- |
| classPrefix | string `('avatar')`                   | 组件 CSS 类的前缀            |
| children    | string, React.Element<typeof Icon>    | 内容（可以是文字或图标）     |
| size        | enum: 'lg', 'md', 'sm', 'xs' `('md')` | 设置头像尺寸                 |
| src         | string                                | 设置图片头像                 |
| circle      | boolean                               | 以圆形显示                   |
| alt         | string                                | 图片头像加载失败时的替代文案 |
