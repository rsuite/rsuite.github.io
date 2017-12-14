# Dropdowns [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/dropdowns/index.md)

- `<Dropdown>` 下拉菜单，用于多项选择，可以收纳多个操作元素，也可以代替原生 `<select>`；
- `<Dropdown.Item>` 下拉菜单选项，类似 `<select>` 中的 `<option>`。

> 如果需要搜索，分组，多选等功能，可以使用 `<SelectPicker>` 与 `<CheckPicker>`  组件。


## 演示

<!--{demo}-->

## API

### `<Dropdown>`

| 属性名称      | 类型                                                | 默认值  | 描述          |
|-----------|---------------------------------------------------|------|-------------|
| activeKey | boolean                                           |      | 当前选中的 key   |
| disabled  | boolean                                           |      | 禁用组件        |
| dropup    | boolean                                           |      | 菜单向上弹出      |
| menuStyle | boolean                                           |      | 菜单样式        |
| autoClose | boolean                                           | true | 菜单选择后自动关闭   |
| title     | React.Node                                        |      | 菜单默认显示内容    |
| onClose   | () => void                                        |      | 菜单关闭的回调函数   |
| onOpen    | () => void                                        |      | 菜单弹出的回调函数   |
| onToggle  | (open?: booleanean) => void                       |      | 菜单状态切换的回调函数 |
| onSelect  | (eventKey: any, event: SyntheticEvent<*>) => void |      | 选择后的回调函数    |


### `<Dropdown.Item>`

| 属性名称           | 类型      | 默认值 | 描述          |
|----------------|---------|-----|-------------|
| href           | string  |     | 点击后跳转的链接    |
| divider        | boolean |     | 显示为分割线      |
| active         | boolean |     | 选中当前选项      |
| disabled       | boolean |     | 禁用当前选项      |
| eventKey       | any     |     | 当前选项的值      |
| onSelect       | func    |     | 选中当前选项的回调函数 |
| onKeyDown      | func    |     | 键盘事件的回调函数   |
| componentClass | object  |     | elementType |
