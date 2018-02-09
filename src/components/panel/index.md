# Panel 面板 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/panel/index.md)

一个可以折叠/展开的内容面板。

## 演示

<!--{demo}-->


## Props
### `<Panel>`

| 属性名称            | 类型               | 默认值       | 描述     |
|-----------------|------------------|-----------|--------|
| collapsible     | boolean          |           | 可折叠的   |
| classPrefix     | string           | `'panel'` |        |
| defaultExpanded | boolean          |           | 默认展开   |
| expanded        | boolean          |           | 展开     |
| eventKey        | any              |           |        |
| header          | React.Node             |           | 头部显示信息 |
| id              | string or number |           |        |
| onSelect        | function         |           |        |
| onEnter         | function         |           |        |
| onEntering      | function         |           |        |
| onEntered       | function         |           |        |
| onExit          | function         |           |        |
| onExiting       | function         |           |        |
| onExited        | function         |           |        |

### `<PanelGroup>`

| 属性名称             | 类型       | 默认值 | 描述  |
|------------------|----------|-----|-----|
| accordion        | boolean  |     |     |
| classPrefix      | string   |     |     |
| children         | node     |     |     |
| activeKey        | any      |     |     |
| defaultActiveKey | any      |     |     |
| onSelect         | function |     |     |
