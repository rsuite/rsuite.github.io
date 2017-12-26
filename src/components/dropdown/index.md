# Dropdown [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/dropdown/index.md)

- `<Dropdown>` 下拉菜单。
- `<Dropdown.Item>` 下拉菜单选项。


## 演示

<!--{demo}-->

## API

### `<Dropdown>`

| 属性名称        | 类型                                                | 默认值  | 描述          |
|-------------|---------------------------------------------------|------|-------------|
| disabled    | boolean                                           |      | 禁用组件        |
| dropup      | boolean                                           |      | 菜单向上弹出      |
| autoClose   | boolean                                           | true | 菜单选择后自动关闭   |
| menuStyle   | Object                                            |      | 菜单样式        |
| title       | React.Node                                        |      | 菜单默认显示内容    |
| onClose     | () => void                                        |      | 菜单关闭的回调函数   |
| onOpen      | () => void                                        |      | 菜单弹出的回调函数   |
| onToggle    | (open?: boolean) => void                       |      | 菜单状态切换的回调函数 |
| onSelect    | (eventKey: any, event: SyntheticEvent<*>) => void |      | 选择后的回调函数    |
| renderTitle | (children?: React.Node) => React.Node             |      | 自定义 title   |


### `<Dropdown.Item>`

| 属性名称           | 类型                                                | 默认值 | 描述          |
|----------------|---------------------------------------------------|-----|-------------|
| href           | string                                            |     | 点击后跳转的链接    |
| divider        | boolean                                           |     | 显示为分割线      |
| active         | boolean                                           |     | 选中当前选项      |
| disabled       | boolean                                           |     | 禁用当前选项      |
| eventKey       | any                                               |     | 当前选项的值      |
| onSelect       | (eventKey: any, event: SyntheticEvent<*>) => void |     | 选中当前选项的回调函数 |
| componentClass | React.ElementType                                 |     | 自定义组件       |
