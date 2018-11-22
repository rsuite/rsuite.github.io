# MultiCascader 级联多项选择器

对有层级关系结构的数据进行多项选择。

* `<MultiCascader>`

## 获取组件

```js
import { MultiCascader } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<MultiCascader>`

| 属性名称              | 类型`(默认值)`                                                                     | 描述                                 |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------------------------ |
| appearance            | enum: 'default', 'subtle' `('default')`                                            | 设置外观                             |
| block                 | boolean                                                                            | 堵塞整行                             |
| cascade               | boolean `(true)`                                                                   | 是否级联选择                         |
| childrenKey           | string `('children')`                                                              | 设置选项子节点在 `data` 中的 `key`   |
| classPrefix           | string `('picker')`                                                                | 组件 CSS 类的前缀                    |
| cleanable             | boolean `(true)`                                                                   | 可以清除                             |
| container             | HTMLElement or (() => HTMLElement)                                                 | 设置渲染的容器                       |
| countable             | boolean `(true)`                                                                   | 可以计数已选项                       |
| data \*               | Array&lt;[DataItemType](#DataItemType)&gt;                                         | 组件数据                             |
| defaultOpen           | boolean                                                                            | 默认打开                             |
| defaultValue          | Array&lt;string&gt;                                                                | 设置默认值                           |
| disabled              | boolean                                                                            | 禁用组件                             |
| disabledItemValues    | Array&lt;string&gt;                                                                | 禁用选项                             |
| height                | number `(320)`                                                                     | 设置 Dropdown 的高度                 |
| labelKey              | string `('label')`                                                                 | 设置选项显示内容在 `data` 中的 `key` |
| menuClassName         | string                                                                             | 选项菜单的 className                 |
| menuHeight            | number `(200)`                                                                     | 设置菜单的高度                       |
| menuWidth             | number `(156)`                                                                     | 设置菜单的宽度                       |
| onChange              | (value:Array&lt;string&gt; , event)=>void                                          | `value` 发生改变时的回调函数         |
| onClose               | ()=>void                                                                           | 关闭回调函数                         |
| onGroupTitleClick     | (event)=>void                                                                      | 点击分组标题的回调函数               |
| onOpen                | ()=>void                                                                           | 打开回调函数                         |
| onSelect              | (item:DataItemType, activePaths: Array, concat:(data, children)=>Array)=>void      | 选项被点击选择后的回调函数           |
| open                  | boolean                                                                            | 打开 (受控)                          |
| placeholder           | React.Node `('Select')`                                                            | 占位符                               |
| placement             | enum: [Placement](#Placement)`('bottomLeft')`                                      | 打开位置                             |
| renderMenuItem        | (label:React.Node, item: DataItemType)=>React.Node                                 | 自定义选项                           |
| renderValue           | (value:Array&lt;string&gt;,selectedItems: Array&lt;DataItemType&gt; )=>React.Nodee | 自定义被选中的选项                   |
| toggleComponentClass  | React.ElementType `('a')`                                                          | 为组件自定义元素类型                 |
| uncheckableItemValues | Array&lt;string&gt;                                                                | 设置不显示复选框的选项值             |
| value                 | Array&lt;string&gt;                                                                | 设置值（受控）                       |
| valueKey              | string `('value')`                                                                 | 设置选项值在 `data` 中的 `key`       |



## Types

### Placement

```ts
type Placement = 'bottomLeft' | 'topLeft' | 'autoVerticalLeft';
```

### DataItemType

```ts
type DataItemType = {
  value: string;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
