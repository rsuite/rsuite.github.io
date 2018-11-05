# CheckTreePicker 树形多项选择器

多项选择器中支持树形结构，用于复杂的数据结构进行多选。

- `<CheckTreePicker>` 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。

## 获取组件

```js
import { CheckTreePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### <CheckTreePicker>

| 属性名称             | 类型 `(默认值)`                                                                              | 描述                            |
| -------------------- | -------------------------------------------------------------------------------------------- | ------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                                                      | 设置外观                        |
| block                | boolean                                                                                      | 堵塞整行                        |
| cascade              | boolean                                                                                      | checktree 是否级联选择          |
| childKey             | string `('children')`                                                                        | tree 数据结构 children 属性名称 |
| cleanable            | boolean `(true)`                                                                             | 是否可以清楚                    |
| container            | HTMLElement or (() => HTMLElement)                                                           | 设置渲染的容器                  |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                                                   | tree 数据                       |
| defaultExpandAll     | boolean                                                                                      | 默认展开所有节点                |
| defaultValue         | Array&lt;DataItemType.value&gt;                                                              | 默认选中的值                    |
| disabled             | boolean                                                                                      | 是否禁用 Picker                 |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                                                              | 禁用节点列表                    |
| expandAll            | boolean                                                                                      | (受控)展示/收起所有节点         |
| labelKey             | string `('label')`                                                                           | tree 数据结构 label 属性名称    |
| menuClassName        | string                                                                                       | 选项菜单的 className            |
| menuStyle            | object                                                                                       | 应用于菜单 DOM 节点的 style     |
| onChange             | (values:Array&lt;DataItemType.value&gt;)=>boolean                                            | 数据改变的回调函数              |
| onClose              | ()=>void                                                                                     | 关闭的回调函数                  |
| onExpand             | (activeNode:DataItemType, layer:number)=>boolean                                             | 树节点展示时的回调              |
| onOpen               | ()=>void                                                                                     | 展开的回调函数                  |
| onSearch             | (searchKeyword:string, event)=>boolean                                                       | 搜索回调函数                    |
| onSelect             | (activeNode:DataItemType, layer:number, values:Array&lt;DataItemType.value&gt;)=>boolean     | 选择树节点后的回调函数          |
| placeholder          | React.Node `('Select')`                                                                      | 占位符                          |
| placement            | enum: Placement `('bottomLeft')`                                                             | 打开位置                        |
| renderExtraFooter    | ()=>React.Node                                                                               | 自定义页脚内容                  |
| renderMenu           | (menu: string,React.Node) => React.Node                                                      | 自定义渲染菜单                  |
| renderTreeIcon       | (nodeData:DataItemType)=>React.Node                                                          | 自定义渲染 图标                 |
| renderTreeNode       | (nodeData:DataItemType)=>React.Node                                                          | 自定义渲染 tree 节点            |
| renderValue          | (values:Array&lt;DataItemType.value&gt;, checkedItems:Array&lt;DataItemType&gt;)=>React.Node | 自定义渲染 placeholder          |
| searchable           | boolean `(true)`                                                                             | 是否显示搜索框                  |
| toggleComponentClass | React.ElementType `('a')`                                                                    | 为组件自定义元素类型            |
| value                | Array&lt;DataItemType.value&gt;                                                              | 当前选中的值                    |
| valueKey             | string `('value')`                                                                           | tree 数据结构 value 属性名称    |

## Types

### Placement

```ts
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom'
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## 相关组件

- [`<CheckTree>`](./check-tree) 用于展示一个树结构数据，同时支持 Checkbox 选择。
- [`<Tree>`](./tree) 用于展示一个树结构数据。
- [`<TreePicker>`](./tree-picker) 选择器组件，树形单项选择器。
