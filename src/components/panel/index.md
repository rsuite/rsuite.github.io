# Panel 面板 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/panel/index.md)

一个内容面板， 支持折叠面板。Panel 中可以放所有 `Data Entry` 组件，也可以放一个表单。

## 演示

<!--{demo}-->

## Props

### `<Panel>`

| 属性名称        | 类型`(默认值)`     | 描述               |
| --------------- | ------------------ | ------------------ |
| bordered        | boolean            | 显示线框           |
| bodyFill        | boolean            | 内容区域撑满容器   |
| collapsible     | boolean            | 可折叠的           |
| classPrefix     | string `('panel')` | className 前缀     |
| defaultExpanded | boolean            | 默认展开           |
| expanded        | boolean            | 展开面板           |
| eventKey        | any                | 面板对应的事件 key |
| header          | React.Node         | 头部显示信息       |
| id              | string or number   | ID                 |

### `<PanelGroup>`

| 属性名称         | 类型`(默认值)`                                 | 描述                                     |
| ---------------- | ---------------------------------------------- | ---------------------------------------- |
| accordion        | boolean                                        | 可折叠的面板                             |
| classPrefix      | string                                         | className 前缀                           |
| activeKey        | any                                            | 展开的面板，对应 `<Panel>` 的 `eventKey` |
| defaultActiveKey | any                                            | 默认展开面板                             |
| onSelect         | (eventKey: any, event: SyntheticEvent) => void | 切换展开面板的回调函数                   |
