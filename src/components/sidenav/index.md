# Sidenav 菜单 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/nav-menu/index.md)

对 Nav 的一个封装，一般用于页面顶部导航。

- `<Sidenav>` 菜单组件。
- `<Sidenav.Body>` 设置菜单选项。
- `<Sidenav.Toggle>` 在移动端等设备上，在菜单显示的按钮，用来展开 `Sidenav.Body` 中的内容。

## 演示

<!--{demo}-->

## API

### `<Sidenav>`

| 属性名称       | 类型                                  | 默认值    | 描述                               |
| -------------- | ------------------------------------- | --------- | ---------------------------------- |
| appearance     | enum: 'default', 'inverse', 'subtle' | 'default' | 菜单外观                         |
| classPrefix    | string                                |           | className 前缀                     |
| componentClass | React.ElementType                     | 'navbar'  | 自定义菜单 Class                 |

