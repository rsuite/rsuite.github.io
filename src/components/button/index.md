# Button [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/button/index.md)



- `<Button>` 是组件中最基础的元素，可以快速创建一个带样式的按钮。
- `<IconButton>` 图标按钮组件。
- `<ButtonGroup>` 按钮组控件，可以把一组按钮放在一起，并统一控制布局。
- `<ButtonToolbar>` 按钮工具栏控件。



## 获取组件


```js
import {
  Button,
  IconButton,
  ButtonGroup,
  ButtonToolbar
} from 'rsuite';
```


## 演示

<!--{demo}-->


## API

### `<Button>`

| 属性名称           | 类型                                                                  | 默认值   | 描述      |
|----------------|---------------------------------------------------------------------|-------|---------|
| active         | boolean                                                             |       | 激活状态    |
| block          | boolean                                                             |       | 显示为块级元素 |
| disabled       | boolean                                                             |       | 禁用      |
| size           | union: 'lg', 'md', 'sm', 'xs'                                       |       | 设置按钮大小  |
| appearance     | union: 'default' , 'primary' , 'link' , 'subtle' , 'ghost'          |       | 设置外观    |
| color          | union: 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet' |       | 设置外观    |
| classPrefix    | string                                                              | 'btn' |         |
| componentClass | React.ElementType                                                   |       |         |
| href           | string                                                              |       |         |



### `<IconButton>`

IconButton 继承所有 Button 的属性

| 属性名称   | 类型      | 默认值 | 描述      |
|--------|---------|-----|---------|
| circle | boolean |     | 设置为圆形按钮 |
| icon   | string  |     | icon 名称 |


### `<ButtonGroup>`

| 属性名称        | 类型                            | 默认值         | 描述      |
|-------------|-------------------------------|-------------|---------|
| block       | boolean                       |             | 显示为块级元素 |
| justified   | boolean                       |             | 撑满，两端对齐 |
| vertical    | boolean                       |             |         |
| size        | union: 'lg', 'md', 'sm', 'xs' |             | 设置按钮大小  |
| classPrefix | string                        | 'btn-group' |         |
