# Input 输入框 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/input/index.md)

代替 HTML 原生控件，input、textarea。

- `<Input>`  输入框组件
- `<InputGroup>`  输入框组合组件
- `<InputGroup.Button>`  与按钮组合
- `<InputGroup.Addon>`  自定义附加元素


## 获取组件


```js
import { Input } from 'rsuite';
```


## 演示

<!--{demo}-->



## Props


### `<Input>`

| 属性名称       | 类型 `(默认值)`                                                    | 描述                                     |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------- |
| classPrefix    | string `('input')`                                                 | class前缀                                |
| componentClass | React.ElementType `('input')`                                      | 可以渲染 string 或者 function 的元素类型 |
| type           | string `('text' )`                                                 | HTML input type.                         |
| onChange       | (value: any, event: SyntheticInputEvent<HTMLInputElement>) => void | value 发生变化的回调函数                 |

### `<InputGroup>`

| 属性名称    | 类型 `(默认值)`          | 描述           |
| ----------- | ------------------------ | -------------- |
| classPrefix | string `('input-group')` | class前缀      |
| inside      | boolean                  | 组合内容在内部 |