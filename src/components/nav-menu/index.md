# NavMenu 菜单 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/nav-menu/index.md)

对 Nav 的一个封装，一般用于页面顶部导航。

- `<NavMenu>` 菜单组件。
- `<NavMenu.Collapse>` 设置菜单选项。
- `<NavMenu.Toggle>` 在移动端等设备上，在菜单显示的按钮，用来展开 `NavMenu.Collapse` 中的内容。

## 演示

<!--{demo}-->

## API

### `<NavMenu>`

| 属性名称       | 类型                                  | 默认值    | 描述                               |
| -------------- | ------------------------------------- | --------- | ---------------------------------- |
| appearance     | union: 'default', 'inverse', 'subtle' | 'default' | 菜单外观                         |
| classPrefix    | string                                |           | className 前缀                     |
| componentClass | React.ElementType                     | 'navbar'  | 自定义菜单 Class                 |

