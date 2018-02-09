# CheckTreePicker 树形多项选择器 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/check-tree-picker/index.md)

多项选择器中支持树形结构，用于复杂的数据结构进行多选。

- `<CheckTreePicker>` 带 Checkbox 的树形组件


## 获取组件


```js
import { CheckTreePicker } from 'rsuite';
```


## 演示

<!--{demo}-->


## Props

### <CheckTreePicker>

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
| locale             | Object ``                                                      | 本地语言                     |
| placeholder        | React.Node `('Select')`                                        | 占位符                       |
| disabled           | boolean                                                        | 是否禁用 Picker              |
| seasrchable        | boolean `(true)`                                               | 是否可以清楚                 |
| seasrchable        | boolean `(true)`                                               | 是否显示搜索框               |
| onSearch           | (searchKeyword:string, event)=>boolean                         | 搜索回调函数                 |
| onOpen             | ()=>boolean                                                    | 展开的回调函数               |
| onClose            | ()=>boolean                                                    | 关闭的回调函数              |
| onChange           | (values:Array<any>)=>boolean                                   | 数据改变的回调函数           |
| onExpand           | (activeNode:Object, layer:number)=>boolean                     | 树节点展示时的回调           |
| onSelect           | (activeNode::Object, layer:number, values:Array<any>)=>boolean | 选择树节点后的回调函数       |
| renderTreeNode     | (nodeData:Array<Object>)=>React.Node                           | 自定义渲染 tree 节点         |
| renderTreeIcon     | (nodeData:Array<Object>)=>React.Node                           | 自定义渲染 图标              |
| renderValue        | (values:Array<Object>, checkItems:Array<Object>)=>React.Node   | 自定义渲染placeholder        |
| renderExtraFooter  | ()=>React.Node                                                 | 自定义页脚内容               |
| placement          | enum: Placement `('bottomLeft')`                               | 打开位置                     |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```