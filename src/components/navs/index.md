# Navs [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/navs/index.md)

提供多种形式的导航菜单列表，可以是横向的，也可以是纵向，也可以是一个 `tab` 形式的。包含以下组件：

- `<Nav>` 导航组件；
- `<Nav.Item>` 导航选项组件。


## 演示

<!--{demo}-->

## API

### `<Nav>`

| 属性名称      | 类型       | 默认值 | 描述                                      |
|-----------|----------|-----|-----------------------------------------|
| tabs      | boolean  |     | 标签式导航                                   |
| pills     | boolean  |     | 胶囊式导航                                   |
| justified | boolean  |     | 宽度自适应                                   |
| stacked   | boolean  |     | 垂直导航                                    |
| pullRight | boolean  |     | 显示在右侧                                   |
| activeKey | any      |     | 激活的 `key`, 对应 `<Nav.Item>` 中 `eventKey` |
| onSelect  | function |     | 选择事件触发的回调函数                             |

### `<Nav.Item>`

| 属性名称           | 类型          | 默认值 | 描述          |
|----------------|-------------|-----|-------------|
| active         | boolean     |     | 激活状态        |
| disabled       | boolean     |     | 禁用状态        |
| href           | string      |     | 链接          |
| onSelect       | function    |     | 选择事件触发的回调函数 |
| eventKey       | any         |     |             |
| componentClass | React.ElementType |     |             |
