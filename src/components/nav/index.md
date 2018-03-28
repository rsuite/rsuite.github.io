# Nav 导航 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/nav/index.md)

提供多种形式的导航菜单列表，可以是横向、纵向布局。

包含以下组件：

* `<Nav>` 导航组件；
* `<Nav.Item>` 导航选项组件。

## 获取组件

```js
import { Nav, Dropdown } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Nav>`

| 属性名称    | 类型`(默认值)`                                      | 描述                                          |
| ----------- | --------------------------------------------------- | --------------------------------------------- |
| classPrefix | string `('nav')`                                    | class 前缀                                    |
| tabs        | boolean                                             | 标签式导航                                    |
| pills       | boolean                                             | 胶囊式导航                                    |
| justified   | boolean                                             | 宽度自适应                                    |
| stacked     | boolean                                             | 垂直导航                                      |
| pullRight   | boolean                                             | 显示在右侧                                    |
| activeKey   | any                                                 | 激活的 `key`, 对应 `<Nav.Item>` 中 `eventKey` |
| onSelect    | (eventKey: any, event: SyntheticEvent<\*>) => void, | 选择事件触发的回调函数                        |

### `<Nav.Item>`

| 属性名称       | 类型                                                | 描述                   |
| -------------- | --------------------------------------------------- | ---------------------- |
| active         | boolean                                             | 激活状态               |
| disabled       | boolean                                             | 禁用状态               |
| icon           | React.Element&lt;typeof Icon&gt;                    | 设置图标               |
| href           | string                                              | 链接                   |
| onSelect       | (eventKey: any, event: SyntheticEvent<\*>) => void, | 选择事件触发的回调函数 |
| componentClass | React.ElementType                                   | 为组件自定义元素类型   |
