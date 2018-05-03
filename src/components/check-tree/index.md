# CheckTree 树形多选控件

* `<CheckTree>` 用于展示一个树结构数据，同时支持 Checkbox 选择。

## 获取组件

```js
import { CheckTree } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<CheckTree>`

| 属性名称           | 类型 `(默认值)`                                                                       | 描述                            |
| ------------------ | ------------------------------------------------------------------------------------- | ------------------------------- |
| value              | Array&lt;DataItemType.value&gt;                                                       | 当前选中的值                    |
| defaultValue       | Array&lt;DataItemType.value&gt;                                                       | 默认选中的值                    |
| data               | Array&lt;[DataItemType](#DataItemType)&gt;                                            | tree 数据                       |
| valueKey           | string `('value')`                                                                    | tree 数据结构 value 属性名称    |
| labelKey           | string `('label')`                                                                    | tree 数据结构 label 属性名称    |
| childKey           | string `('children')`                                                                 | tree 数据结构 children 属性名称 |
| disabledItemValues | Array&lt;DataItemType.value&gt;                                                       | 禁用节点列表                    |
| defaultExpandAll   | boolean                                                                               | 默认展开所有节点                |
| cascade            | boolean `(true)`                                                                      | checktree 是否级联选择          |
| onChange           | (values:Array&lt;DataItemType.value&gt;)=>void                                        | 数据改变的回调函数              |
| onExpand           | (activeNode:DataItemType, layer:number)=>void                                         | 树节点展示时的回调              |
| onSelect           | (activeNode:DataItemType, layer:number, values:Array&lt;DataItemType.value&gt;)=>void | 选择树节点后的回调函数          |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                                                   | 自定义渲染 tree 节点            |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                                                   | 自定义渲染 图标                 |

## Types

### Placement

```ts
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```

### DataItemType

```ts
Type DataItemType = {
  value: any,
  label: React.Node,
  children?:Array<DataItemType>
}
```

## 相关组件

* [`<Tree>`](./tree) 用于展示一个树结构数据。
* [`<TreePicker>`](./tree-picker) 选择器组件，树形单项选择器。
* [`<CheckTreePicker>`](./check-tree-picker) 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。
