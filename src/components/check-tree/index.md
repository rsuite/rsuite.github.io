# CheckTree 树形多选控件 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/check-tree/index.md)


- `<CheckTree>`


## 获取组件


```js
import { CheckTree } from 'rsuite';
```


## 演示

<!--{demo}-->


## Props


### `<CheckTree>`


| 属性名称           | 类型 `(默认值)`                                                | 描述                         |
| ------------------ | -------------------------------------------------------------- | ---------------------------- |
| value              | Array<any>                                                     | 当前选中的值                 |
| defaultValue       | Array<any>                                                     | 默认选中的值                 |
| data               | Array<Object>                                                  | tree 数据                    |
| valueKey           | string `('value')`                                             | tree数据结构value属性名称    |
| labelKey           | string `('label')`                                             | tree数据结构label属性名称    |
| childKey           | string `('children')`                                          | tree数据结构children属性名称 |
| disabledItemValues | Array<any>                                                     | 禁用节点列表                 |
| defaultExpandAll   | boolean                                                        | 默认展开所有节点             |
| cascade            | boolean                                                        | checktree是否级联选择        |
| onChange           | (values:Array<any>)=>boolean                                   | 数据改变的回调函数           |
| onExpand           | (activeNode:Object, layer:number)=>boolean                     | 树节点展示时的回调           |
| onSelect           | (activeNode::Object, layer:number, values:Array<any>)=>boolean | 选择树节点后的回调函数       |
| renderTreeNode     | (nodeData:Array<Object>)=>React.Node                           | 自定义渲染 tree 节点         |
| renderTreeIcon     | (nodeData:Array<Object>)=>React.Node                           | 自定义渲染 图标              |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```