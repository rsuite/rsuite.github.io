# Tree 树型控件

* `<Tree>` 用于展示一个树结构数据。

## 获取组件

```js
import { Tree } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Tree>`

| 属性名称         | 类型 `(默认值)`                                      | 描述                            |
| ---------------- | ---------------------------------------------------- | ------------------------------- |
| classPrefix      | string`('picker-tree')`                              | 组件 CSS 类的前缀                      |
| value            | Array&lt;DataItemType.value&gt;                      | 当前选中的值                    |
| defaultValue     | Array&lt;DataItemType.value&gt;                      | 默认选中的值                    |
| data \*          | Array&lt;[DataItemType](#DataItemType)&gt;           | tree 数据                       |
| valueKey         | string `('value')`                                   | tree 数据结构 value 属性名称    |
| labelKey         | string `('label')`                                   | tree 数据结构 label 属性名称    |
| childrenKey      | string `('children')`                                | tree 数据结构 children 属性名称 |
| disabledItems    | Array&lt;DataItemType.value&gt;                      | 禁用节点列表                    |
| defaultExpandAll | boolean                                              | 默认展开所有节点                |
| onExpand         | (activeNode:DataItemType, layer:number)=>void        | 树节点展示时的回调              |
| onSelect         | (activeNode:DataItemType, layer:number, event)=>void | 选择树节点后的回调函数          |
| onChange         | (value:DataItemType.value)=>void                     | 数据改变的回调函数              |
| renderTreeNode   | (nodeData:DataItemType)=>React.Node                  | 自定义渲染 tree 节点            |
| renderTreeIcon   | (nodeData:DataItemType)=>React.Node                  | 自定义渲染 图标                 |

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## 相关组件

* [`<CheckTree>`](./check-tree) 用于展示一个树结构数据，同时支持 Checkbox 选择。
* [`<TreePicker>`](./tree-picker) 选择器组件，树形单项选择器。
* [`<CheckTreePicker>`](./check-tree-picker) 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。
