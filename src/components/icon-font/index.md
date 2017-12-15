# IconFont [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/iconFont/index.md)

`<IconFont>` 通过字体实现的矢量图形

> RSuite 部分图标使用开源项目 Font Awesome

## 演示

<!--{demo}-->


## API

### `<IconFont>`

| 属性名称           | 类型          | 默认值    | 描述                                  |
|----------------|-------------|--------|-------------------------------------|
| classPrefix    | string      | `icon` | class前缀                             |
| componentClass | React.ElementType | `i`    | 组件类型                                |
| icon           | string      |        | 使用的icon名                            |
| size           | string      |        | 放大图标 ['lg', '2x', '3x', '4x', '5x'] |
| flip           | string      |        | 翻转图标 ['horizontal', 'vertical']     |
| stack          | string      |        | 组合多个图标 ['1x', '2x']                 |
| rotate         | number      |        | 旋转图标                                |
| fixedWidth     | boolean        |        | 因为有很多图标大小参差不齐,固定图标宽度                |
| spin           | boolean        |        | 动态旋转图标                              |
| pulse          | boolean        |        | 动态旋转图标，旋转8步                         |
