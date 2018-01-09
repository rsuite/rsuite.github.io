# Icon 图标 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/icon/index.md)

图标组件，除了内置的常用图标外，还可以自定义引入 SVG 图标。

`<Icon>` 通过字体实现的矢量图形

## 演示

<!--{demo}-->


## API

### `<Icon>`

| 属性名称       | 类型                                           | 默认值 | 描述                                   |
| -------------- | ---------------------------------------------- | ------ | -------------------------------------- |
| classPrefix    | string                                         | 'icon' | class前缀                              |
| componentClass | React.ElementType                              | 'i'    | 组件类型                               |
| icon           | union: string, { viewBox: string, id: string } |        | 使用的icon名                           |
| size           | union: 'lg', '2x', '3x', '4x', '5x'            |        | 放大图标                               |
| flip           | union: 'horizontal', 'vertical'                |        | 翻转图标                               |
| stack          | union: '1x', '2x'                              |        | 组合多个图标                           |
| rotate         | number                                         |        | 旋转图标                               |
| fixedWidth     | boolean                                        |        | 因为有很多图标尺寸参差不齐,固定图标宽度 |
| spin           | boolean                                        |        | 动态旋转图标                           |
| pulse          | boolean                                        |        | 动态旋转图标，旋转8步                  |
| svgStyle       | Object                                         |        | 当使用自定义 svg Icon, 设置 svg 的样式                                     |