# CheckTreePicker 树形多项选择器 

多项选择器中支持树形结构，用于复杂的数据结构进行多选。

* `<CheckTreePicker>` 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。

## 获取组件

```js
import { CheckTreePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### <CheckTreePicker>

| 属性名称           | 类型 `(默认值)`                                                            | 描述                            |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------- |
| value              | Array&lt;any&gt;                                                           | 当前选中的值                    |
| defaultValue       | Array&lt;any&gt;                                                           | 默认选中的值                    |
| data               | Array&lt;Object&gt;                                                        | tree 数据                       |
| valueKey           | string `('value')`                                                         | tree 数据结构 value 属性名称    |
| labelKey           | string `('label')`                                                         | tree 数据结构 label 属性名称    |
| childKey           | string `('children')`                                                      | tree 数据结构 children 属性名称 |
| disabledItemValues | Array&lt;any&gt;                                                           | 禁用节点列表                    |
| defaultExpandAll   | boolean                                                                    | 默认展开所有节点                |
| cascade            | boolean                                                                    | checktree 是否级联选择          |
| locale             | Object `` | 本地语言                                                       |
| placeholder        | React.Node `('Select')`                                                    | 占位符                          |
| disabled           | boolean                                                                    | 是否禁用 Picker                 |
| seasrchable        | boolean `(true)`                                                           | 是否可以清楚                    |
| seasrchable        | boolean `(true)`                                                           | 是否显示搜索框                  |
| onSearch           | (searchKeyword:string, event)=>boolean                                     | 搜索回调函数                    |
| onOpen             | ()=>boolean                                                                | 展开的回调函数                  |
| onClose            | ()=>boolean                                                                | 关闭的回调函数                  |
| onChange           | (values:Array&lt;any&gt;)=>boolean                                         | 数据改变的回调函数              |
| onExpand           | (activeNode:Object, layer:number)=>boolean                                 | 树节点展示时的回调              |
| onSelect           | (activeNode::Object, layer:number, values:Array&lt;any&gt;)=>boolean       | 选择树节点后的回调函数          |
| renderTreeNode     | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | 自定义渲染 tree 节点            |
| renderTreeIcon     | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | 自定义渲染 图标                 |
| renderValue        | (values:Array&lt;Object&gt;, checkedItems:Array&lt;Object&gt;)=>React.Node | 自定义渲染 placeholder          |
| renderExtraFooter  | ()=>React.Node                                                             | 自定义页脚内容                  |
| placement          | enum: Placement `('bottomLeft')`                                           | 打开位置                        |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```

## 相关组件

* [`<CheckTree>`](./check-tree) 用于展示一个树结构数据，同时支持 Checkbox 选择。
* [`<Tree>`](./tree) 用于展示一个树结构数据。
* [`<TreePicker>`](./tree-picker) 选择器组件，树形单项选择器。
