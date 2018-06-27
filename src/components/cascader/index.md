# Cascader 级联选择器

对有层级关系结构的数据进行单项选择。

* `<Cascader>`

## 获取组件

```js
import { Cascader } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Cascader>`

| 属性名称             | 类型`(默认值)`                                                     | 描述                                 |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------ |
| classPrefix          | string `('picker-cascader')`                                       | 组件 CSS 类的前缀                    |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                         | 组件数据                             |
| disabled             | boolean                                                            | 禁用组件                             |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                                    | 禁用选项                             |
| groupBy              | string                                                             | 设置分组条件在 `data` 中的 `key`     |
| valueKey             | string `('value')`                                                 | 设置选项值在 `data` 中的 `key`       |
| labelKey             | string `('label')`                                                 | 设置选项显示内容在 `data` 中的 `key` |
| childrenKey          | string `('children')`                                              | 设置选项子节点在 `data` 中的 `key`   |
| value                | DataItemType.value                                                 | 设置值（受控）                       |
| defaultValue         | DataItemType.value                                                 | 设置默认值                           |
| height               | number `(320)`                                                     | 设置 Dropdown 的高度                 |
| onChange             | (value:DataItemType.value, event)=>void                            | `value` 发生改变时的回调函数         |
| onSelect             | (item:DataItemType, activePaths: Array, event: DefaultEvent)=>void | 选项被点击选择后的回调函数           |
| onSearch             | (searchKeyword:string, event)=>void                                | 搜索的回调函数                       |
| onOpen               | ()=>void                                                           | 打开回调函数                         |
| onClose              | ()=>void                                                           | 关闭回调函数                         |
| onGroupTitleClick    | (event)=>void                                                      | 点击分组标题的回调函数               |
| placeholder          | React.Node `('Select')`                                            | 占位符                               |
| renderValue          | (label:React.Node, item: DataItemType)=>React.Node                 | 自定义被选中的选项                   |
| renderMenuItem       | (label:React.Node, item: DataItemType)=>React.Node                 | 自定义选项                           |
| cleanable            | boolean `(true)`                                                   | 可以清除                             |
| open                 | boolean                                                            | 打开 (受控)                          |
| defaultOpen          | boolean                                                            | 默认打开                             |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                      | 打开位置                             |
| menuClassName        | string                                                             | 选项菜单的 className                 |
| container            | HTMLElement or (() => HTMLElement)                                 | 设置渲染的容器                       |
| toggleComponentClass | React.ElementType `('a')`                                          | 为组件自定义元素类型                 |

## Types

### Placement

```ts
type Placement = 'bottomLeft' | 'topLeft' | 'autoVerticalLeft';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
