# Navbars [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/navbars/index.md)


- `<Navbar>` 导航栏组件；
- `<Navbar.Header>`  设置导航栏头部信息；
- `<Navbar.Brand>`  设置导航栏品牌商标；
- `<Navbar.Collapse>` 设置导航栏选项；
- `<Navbar.Toggle>` 在移动端等设备上，在导航栏显示的按钮，用来展开 `<Navbar.Collapse>` 中的内容。

## 演示

<!--{demo}-->

## Props

| 属性名称           | 类型          | 默认值 | 描述                         |
|----------------|-------------|-----|----------------------------|
| inverse        | string      |     | 颠倒颜色                       |
| fixedTop       | boolean     |     | 固定在头部                      |
| fixedBottom    | boolean     |     | 固定在底部                      |
| onToggle       | function    |     | `<Navbar.Toggle>` 点击后的回调函数 |
| classPrefix    | string      |     |                            |
| componentClass | elementType |     |                            |

