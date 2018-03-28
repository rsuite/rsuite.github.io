# Loader 加载器 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/loader/index.md)

用于数据加载过程中，提供状态的一个组件。

* `<Loader>` 加载器

## 获取组件

```js
import { Loader } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Loader>`

| 属性名称    | 类型 `(默认值)`                         | 描述             |
| ----------- | --------------------------------------- | ---------------- |
| backdrop    | boolean                                 | 显示背景         |
| classPrefix | string                                  | className 前缀   |
| size        | enum: 'lg', 'md', 'sm', 'xs'`('md')`    | 设置加载器尺寸   |
| center      | boolean                                 | 在容器中居中显示 |
| content     | React.Node                              | 自定义描述文本   |
| speed       | enum:'fast','normal','slow'`('normal')` | 加载器旋转速度   |
| inverse     | boolean                                 | 翻转加载器颜色   |
