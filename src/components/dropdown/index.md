# Dropdown 下拉菜单 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/dropdown/index.md)

下拉菜单是一种导航，如果需要选择值请使用 SelectPicker。

- `<Dropdown>` 下拉菜单。
- `<Dropdown.Item>` 下拉菜单选项。
- `<Dropdown.Menu>` 下拉菜单中创建只菜单。

## 演示

<!--{demo}-->

## API

### `<Dropdown>`

| 属性名称        | 类型                                                                                    | 默认值          | 描述                                   |
|-------------|---------------------------------------------------------------------------------------|--------------|--------------------------------------|
| activeKey   | any                                                                                   |              | 激活状态的选项，对应 Dropdown.Item 中的 eventKey |
| classPrefix | string                                                                                | 'dropdown'   | className 前缀                         |
| disabled    | boolean                                                                               |              | 禁用组件                                 |
| dropup      | boolean                                                                               |              | 菜单向上弹出                               |
| menuStyle   | Object                                                                                |              | 菜单样式                                 |
| title       | React.Node                                                                            |              | 菜单默认显示内容                             |
| onClose     | () => void                                                                            |              | 菜单关闭的回调函数                            |
| onOpen      | () => void                                                                            |              | 菜单弹出的回调函数                            |
| onToggle    | (open?: boolean) => void                                                              |              | 菜单状态切换的回调函数                          |
| onSelect    | (eventKey: any, event: SyntheticEvent<*>) => void                                     |              | 选择后的回调函数                             |
| renderTitle | (children?: React.Node) => React.Node                                                 |              | 自定义 title                            |
| placement   | union: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter','topRight' | 'bottomLeft' | 菜单显示位置                               |


### `<Dropdown.Item>`

| 属性名称           | 类型                                                | 默认值 | 描述          |
|----------------|---------------------------------------------------|-----|-------------|
| divider        | boolean                                           |     | 显示为分割线      |
| active         | boolean                                           |     | 选中当前选项      |
| disabled       | boolean                                           |     | 禁用当前选项      |
| eventKey       | any                                               |     | 当前选项的值      |
| onSelect       | (eventKey: any, event: SyntheticEvent<*>) => void |     | 选中当前选项的回调函数 |
| componentClass | React.ElementType                                 |     | 自定义组件       |


### `<Dropdown.Menu>`

| 属性名称  | 类型     | 默认值 | 描述    |
|-------|--------|-----|-------|
| title | string |     | 子菜单标题 |
