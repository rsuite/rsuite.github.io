# Form [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/form/index.md)

表单基础控件
- `<Form>`
- `<FormGroup>`
- `<ControlLabel>`


## 演示

<!--{demo}-->



## API

### `<Form>`

属性名称           | 类型          | 默认值 | 描述
-------------- | ----------- | --- | --
horizontal     | boolean     |     |
inline         | boolean     |     |


### `<FormGroup>`

属性名称            | 类型                                         | 默认值 | 描述
--------------- | ------------------------------------------ | --- | --
controlId       | string                                     |     |
validationState | one of:`'success'`, `'warning'`, `'error'` |     |

### `<ControlLabel>`

属性名称    | 类型      | 默认值   | 描述
------- | ------- | ----- | --
htmlFor | string  |       |
srOnly  | boolean | false |

### `<FormControl>`

属性名称           | 类型          | 默认值   | 描述
-------------- | ----------- | ----- | --
componentClass | elementType |       |
type           | string      | false |
id             | string      |       |
