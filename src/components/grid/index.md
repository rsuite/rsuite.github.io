# Grid 网格 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/grid/index.md)

一组用于网格布局的组件。

包含下面组件：

-  `<Grid>`
-  `<Row>`
- `<Col>`

## 演示

<!--{demo}-->

## Props

### `<Grid>`

属性名称           | 类型          | 默认值   | 描述
-------------- | ----------- | ----- | --
componentClass | React.ElementType | `div` |
fluid          | boolean     | false |

### `<Row>`

属性名称           | 类型          | 默认值   | 描述
-------------- | ----------- | ----- | --
componentClass | React.ElementType | `div` |

### `<Col>`

属性名称           | 类型                                  | 默认值   | 描述
-------------- | -------------- | ----- | --------------
componentClass | React.ElementType    | `div` |
xs             | number |       | < `480px` 响应式栅格
sm             | number |       | ≥ `480px` 响应式栅格
md             | number |       | ≥ `992px` 响应式栅格
lg             | number |       | ≥ `1200px` 响应式栅格
xsOffset       | number |       | 栅格左侧的间隔格数，间隔内不可以有栅格
smOffset       | number |       | 栅格左侧的间隔格数，间隔内不可以有栅格
mdOffset       | number |       | 栅格左侧的间隔格数，间隔内不可以有栅格
lgOffset       | number |       | 栅格左侧的间隔格数，间隔内不可以有栅格
xsPush         | number |       | 栅格向右移动格数
smPush         | number |       | 栅格向右移动格数
mdPush         | number |       | 栅格向右移动格数
lgPush         | number |       | 栅格向右移动格数
xsPull         | number |       | 栅格向左移动格数
smPull         | number |       | 栅格向左移动格数
mdPull         | number |       | 栅格向左移动格数
lgPull         | number |       | 栅格向左移动格数
xsHidden       | boolean|       | 隐藏栅格
smHidden       | boolean|       | 隐藏栅格
mdHidden       | boolean|       | 隐藏栅格
lgHidden       | boolean|       | 隐藏栅格
