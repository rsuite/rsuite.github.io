# Navbar 导航栏 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/navbar/index.md)

对 Nav 的一个封装，一般用于页面顶部导航。

- `<Navbar>` 导航栏组件。
- `<Navbar.Header>`  设置导航栏头部信息。
- `<Navbar.Brand>`  设置导航栏品牌商标。
- `<Navbar.Body>` 设置导航栏选项。
- `<Navbar.Toggle>` 在移动端等设备上，在导航栏显示的按钮，用来展开 `Navbar.Body` 中的内容。

## 演示

<!--{demo}-->

## API

### `<Navbar>`

| 属性名称       | 类型                                  | 默认值    | 描述                               |
| -------------- | ------------------------------------- | --------- | ---------------------------------- |
| appearance     | enum: 'default', 'inverse', 'subtle' | 'default' | 导航栏外观                         |
| classPrefix    | string                                |           | className 前缀                     |
| componentClass | React.ElementType                     | 'navbar'  | 自定义导航栏 Class                 |
| onToggle       | (expanded: boolean) => void           |           | `<Navbar.Toggle>` 点击后的回调函数 |
