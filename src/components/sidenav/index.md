# Sidenav 侧导航

对 Nav 的一个封装，用于页面侧边栏。

* `<Sidenav>` 侧导航组件。
* `<Sidenav.Header>` 导航顶部内容区域。
* `<Sidenav.Body>` 导航选项区域。

## 获取组件

```js
import { Sidenav } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Sidenav>`

| 属性名称         | 类型                                                          | 默认值                        | 描述                                                 |
| ---------------- | ------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| appearance       | enum: 'default', 'inverse', 'subtle'                          | 'default'                     | 菜单外观                                             |
| classPrefix      | string                                                        | 'sidenav'                     | 组件 CSS 类的前缀                                    |
| componentClass   | React.ElementType                                             | 'div'                         | 为组件自定义元素类型                                 |
| expanded         | boolean                                                       | true                          | 是否是展开 Sidenav                                   |
| openKeys         | Array&lt;any&gt;                                              |                               | 打开菜单, 对应 Dropdown 中 eventKey (受控)           |
| defaultOpenKeys  | Array&lt;any&gt;                                              |                               | 默认展开菜单, 对应 Dropdown 中 eventKey              |
| activeKey        | any                                                           |                               | 激活选项, 对应菜单 eventKey (受控)                   |
| defaultActiveKey | any                                                           |                               | 激活选项, 对应菜单 eventKey                          |
| onSelect         | (eventKey: Array&lt;any&gt;, event: SyntheticEvent) => void   |                               | 选择菜单的回调函数                                   |
| onOpenChange     | (openKeys: Array&lt;any&gt;, event: SyntheticEvent) => void   |                               | 菜单打开发生改变的回调函数                           |
