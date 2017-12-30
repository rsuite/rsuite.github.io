# Icon [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/iconFont/index.md)

`<Icon>` 通过字体实现的矢量图形

## 演示

<!--{demo}-->


## API

### `<Icon>`

| 属性名称        | 类型                              | 默认值  | 描述                   |
|----------------|-------------------------------------|--------|----------------------|
| classPrefix    | string                              | 'icon' | class前缀              |
| componentClass | React.ElementType                   | 'i'    | 组件类型                 |
| icon           | string                              |        | 使用的icon名             |
| size           | union: 'lg', '2x', '3x', '4x', '5x' |        | 放大图标                 |
| flip           | union: 'horizontal', 'vertical'     |        | 翻转图标                 |
| stack          | union: '1x', '2x'                   |        | 组合多个图标               |
| rotate         | number                              |        | 旋转图标                 |
| fixedWidth     | boolean                             |        | 因为有很多图标尺寸参差不齐,固定图标宽度 |
| spin           | boolean                             |        | 动态旋转图标               |
| pulse          | boolean                             |        | 动态旋转图标，旋转8步          |
