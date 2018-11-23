# CheckTree 树形多选控件

- `<CheckTree>` 用于展示一个树结构数据，同时支持 Checkbox 选择。

## 获取组件

```js
import { CheckTree } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<CheckTree>`

| 属性名称              | 类型 `(默认值)`                                                                     | 描述                            |
| --------------------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| cascade               | boolean `(true)`                                                                    | checktree 是否级联选择          |
| childKey              | string `('children')`                                                               | tree 数据结构 children 属性名称 |
| data \*               | Array&lt;[DataItemType](#types)&gt;                                                 | tree 数据                       |
| defaultExpandAll      | boolean                                                                             | 默认展开所有节点                |
| defaultValue          | Array&lt;string&gt;                                                                 | 默认选中的值                    |
| disabledItemValues    | Array&lt;string&gt;                                                                 | 禁用节点列表                    |
| expandAll             | boolean                                                                             | 展示/收起所有节点(受控)         |
| labelKey              | string `('label')`                                                                  | tree 数据结构 label 属性名称    |
| onChange              | (values:Array&lt;string&gt;)=>void                                                  | 数据改变的回调函数              |
| onExpand              | (activeNode:[DataItemType](#types), layer:number)=>void                             | 树节点展示时的回调              |
| onSelect              | (activeNode:[DataItemType](#types), layer:number, values:Array&lt;string&gt;)=>void | 选择树节点后的回调函数          |
| renderTreeIcon        | (nodeData:[DataItemType](#types))=>React.Node                                       | 自定义渲染 图标                 |
| renderTreeNode        | (nodeData:[DataItemType](#types))=>React.Node                                       | 自定义渲染 tree 节点            |
| searchKeyword         | string                                                                              | 搜索关键词(受控)                |
| uncheckableItemValues | Array&lt;string&gt;                                                                 | 设置不显示复选框的选项值        |
| value                 | Array&lt;string&gt;                                                                 | 当前选中的值                    |
| valueKey              | string `('value')`                                                                  | tree 数据结构 value 属性名称    |


## 相关组件

- [`<Tree>`](./tree) 用于展示一个树结构数据。
- [`<TreePicker>`](./tree-picker) 选择器组件，树形单项选择器。
- [`<CheckTreePicker>`](./check-tree-picker) 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。
