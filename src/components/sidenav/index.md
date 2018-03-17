# Sidenav 侧导航 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/nav-menu/index.md)

对 Nav 的一个封装，用于页面侧边栏。

* `<Sidenav>` 侧导航组件。
* `<Sidenav.Header>` 导航顶部内容区域。
* `<Sidenav.Body>` 导航选项区域。

## 演示

<!--{demo}-->

## Props

### `<Sidenav>`

| 属性名称       | 类型                                 | 默认值    | 描述                 |
| -------------- | ------------------------------------ | --------- | -------------------- |
| appearance     | enum: 'default', 'inverse', 'subtle' | 'default' | 菜单外观             |
| classPrefix    | string                               | 'sidenav' | className 前缀       |
| componentClass | React.ElementType                    | 'div'     | 为组件自定义元素类型 |
