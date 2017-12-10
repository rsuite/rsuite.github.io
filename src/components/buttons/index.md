# Buttons [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/button/index.md)



`<Button>` 是组件中最基础的元素，可以快速创建一个带样式的按钮，也可以是一个链接。


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

| 属性名称           | 类型          | 默认值      | 描述                                                                 |
|----------------|-------------|----------|--------------------------------------------------------------------|
| active         | boolean     |          | 激活状态                                                               |
| block          | boolean     |          | 显示为块级元素                                                            |
| disabled       | boolean     |          | 禁用                                                                 |
| type           | string      | `button` | 可选项：`button` `reset` `submit`                                      |
| size           | string      |          | 可选项：`lg` `md` `sm` `xs`                                            |
| shape          | string      |          | 可选项：`default` `primary` `success` `warning` `danger` `info` `link` |
| classPrefix    | string      | `btn`    |                                                                    |
| componentClass | elementType |          |                                                                    |
| href           | string      |          |                                                                    |
