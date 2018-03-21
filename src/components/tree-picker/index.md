# TreePicker 树形选择器 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/select-picker/index.md)

* `<TreePicker>` 选择器组件，树形单项选择器。

## 获取组件

```js
import { TreePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<TreePicker>`

| 属性名称          | 类型 `(默认值)`                                    | 描述                            |
| ----------------- | -------------------------------------------------- | ------------------------------- |
| classPrefix       | string                                             | class 前缀                      |
| value             | array                                              | 当前选中的值                    |
| defaultValue      | array                                              | 默认选中的值                    |
| data              | array                                              | tree 数据                       |
| valueKey          | string `('value')`                                 | tree 数据结构 value 属性名称    |
| labelKey          | string `('label')`                                 | tree 数据结构 label 属性名称    |
| childrenKey       | string `('children')`                              | tree 数据结构 children 属性名称 |
| disabledItems     | array                                              | 禁用节点列表                    |
| defaultExpandAll  | boolean                                            | 默认展开所有节点                |
| inline            | boolean                                            | 是否内联显示 tree               |
| open              | boolean                                            | 打开（受控）                    |
| defaultOpen       | boolean                                            | 默认打开                        |
| locale            | object                                             | 本地语言                        |
| placeholder       | React.Node `('Select')`                            | 占位符                          |
| disabled          | boolean                                            | 是否禁用 Picker                 |
| cleanable         | boolean `(true)`                                   | 是否可以清除                    |
| seasrchable       | boolean `(true)`                                   | 是否可以搜索                    |
| onSearch          | (searchKeyword:string, event)=>void                | 搜索回调函数                    |
| onOpen            | ()=>void                                           | 展开 Dropdown 的回调函数        |
| onClose           | ()=>void                                           | 关闭 Dropdown 的回调函数        |
| onChange          | (value:any)=>void                                  | 数据改变的回调函数              |
| onExpand          | (activeNode:Object, layer:number)=>void            | 树节点展示时的回调              |
| onSelect          | (activeNode:Object, layer:number, value:any)=>void | 选择树节点后的回调函数          |
| renderTreeNode    | (nodeData:Object)=>React.Node                      | 自定义渲染 tree 节点            |
| renderTreeIcon    | (nodeData:Object)=>React.Node                      | 自定义渲染 图标                 |
| renderValue       | (activeNode, placeholder)=>React.Node              | 自定义渲染 placeholder          |
| renderExtraFooter | ()=>React.Node                                     | 自定义页脚内容                  |
| placement         | enum: Placement `('bottomLeft')`                   | 打开位置                        |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```

## 相关组件

* [`<CheckTreePicker>`](./check-tree-picker) 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。
* [`<Tree>`](./tree) 用于展示一个树结构数据。
* [`<CheckTree>`](./check-tree) 用于展示一个树结构数据，同时支持 Checkbox 选择。
