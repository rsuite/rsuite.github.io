# Button [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/button/index.md)



- `<Button>` 是组件中最基础的元素，可以快速创建一个带样式的按钮，也可以是一个链接。
- `<ButtonGroup>` 按钮组控件，可以把一组按钮放在一起，并统一控制布局;
- `<ButtonToolbar>` 按钮工具栏控件。



## 获取组件


```js
import { Button } from 'rsuite';
// or
// import Button from 'rsuite/lib/Button'

```


## 演示

<!--{demo}-->


## API

### `<Button>`

| 属性名称           | 类型                                                                    | 默认值   | 描述      |
|----------------|-----------------------------------------------------------------------|-------|---------|
| active         | boolean                                                               |       | 激活状态    |
| block          | boolean                                                               |       | 显示为块级元素 |
| disabled       | boolean                                                               |       | 禁用      |
| size           | union: 'lg', 'md', 'sm', 'xs'                                         |       | 设置按钮大小  |
| shape          | union: 'default','primary','success','warning','danger','info','link' |       | 设置形状    |
| classPrefix    | string                                                                | 'btn' |         |
| componentClass | React.ElementType                                                     |       |         |
| href           | string                                                                |       |         |



### `<ButtonGroup>`

| 属性名称        | 类型                            | 默认值         | 描述      |
|-------------|-------------------------------|-------------|---------|
| block       | boolean                       |             | 显示为块级元素 |
| justified   | boolean                       |             | 撑满，两端对齐 |
| vertical    | boolean                       |             |         |
| size        | union: 'lg', 'md', 'sm', 'xs' |             | 设置按钮大小  |
| classPrefix | string                        | 'btn-group' |         |
