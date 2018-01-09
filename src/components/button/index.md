# Button 按钮 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/button/index.md)

常用的操作按钮，按钮组合，按钮布局。


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

| 属性名称           | 类型                                                                  | 默认值   | 描述           |
|----------------|---------------------------------------------------------------------|-------|--------------|
| active         | boolean                                                             |       | 激活状态         |
| block          | boolean                                                             |       | 显示为块级元素      |
| disabled       | boolean                                                             |       | 禁用           |
| size           | union: 'lg', 'md', 'sm', 'xs'                                       |       | 设置按钮尺寸       |
| appearance     | union: 'default' , 'primary' , 'link' , 'subtle' , 'ghost'          |       | 设置外观         |
| color          | union: 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet' |       | 设置外观         |
| classPrefix    | string                                                              | 'btn' | className 前缀 |
| componentClass | React.ElementType                                                   |       | 自定义组件类       |
| href           | string                                                              |       | 按钮跳转链接       |



### `<IconButton>`

IconButton 继承所有 Button 的属性

| 属性名称          | 类型                     | 默认值        | 描述             |
|---------------|------------------------|------------|----------------|
| circle        | boolean                |            | 设置为圆形按钮        |
| icon          | string                 |            | icon 名称        |
| iconClassName | string                 |            | icon className |
| iconStyle     | Object                 |            | icon 样式        |
| placement     | union: 'left', 'right' | 'left'     | icon 的位置       |
| classPrefix   | string                 | 'btn-icon' | className 前缀   |

### `<ButtonGroup>`

| 属性名称        | 类型                            | 默认值         | 描述           |
|-------------|-------------------------------|-------------|--------------|
| block       | boolean                       |             | 适应容器宽度       |
| justified   | boolean                       |             | 横向等宽布局       |
| vertical    | boolean                       |             | 按钮垂直布局       |
| size        | union: 'lg', 'md', 'sm', 'xs' |             | 设置按钮尺寸       |
| classPrefix | string                        | 'btn-group' | className 前缀 |
