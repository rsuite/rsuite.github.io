# Button Groups [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/buttonGroups/index.md)

- `<ButtonGroup>` 按钮组控件，可以把一组按钮放在一起，并统一控制布局;
- `<ButtonToolbar>` 按钮工具栏控件。

## 获取组件


```js
import { ButtonGroup, ButtonToolbar } from 'rsuite';
// or
// import ButtonGroup from 'rsuite/lib/ButtonGroup'
// import ButtonToolbar from 'rsuite/lib/ButtonToolbar'

```


## 演示

<!--{demo}-->



## API

### `<ButtonGroup>`

| 属性名称        | 类型      | 默认值         | 描述                      |     |
|-------------|---------|-------------|-------------------------|-----|
| block       | boolean |             | 显示为块级元素                 |     |
| justified   | boolean |             | 撑满，两端对齐                 |     |
| vertical    | boolean |             |                         |     |
| size        | string  |             | 可选项：`lg` `md` `sm` `xs` |     |
| classPrefix | string  | `btn-group` |                         |     |
