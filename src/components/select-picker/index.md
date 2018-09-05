# SelectPicker 单项选择器

用于单项数据选择，支持分组。

* `<SelectPicker>`

## 获取组件

```js
import { SelectPicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<SelectPicker>`

| 属性名称             | 类型`(默认值)`                                               | 描述                                 |
| -------------------- | ------------------------------------------------------------ | ------------------------------------ |
| appearance           | enum: 'default', 'subtle' `('default')`                      | 设置外观                             |
| block                | boolean                                                      | 堵塞整行                             |
| classPrefix          | string `('picker')`                                          | 组件 CSS 类的前缀                    |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                   | 组件数据                             |
| groupBy              | string                                                       | 设置分组条件在 `data` 中的 `key`     |
| valueKey             | string `('value')`                                           | 设置选项值在 `data` 中的 `key`       |
| labelKey             | string `('label')`                                           | 设置选项显示内容在 `data` 中的 `key` |
| disabled             | boolean                                                      | 禁用组件                             |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                              | 禁用选项                             |
| value                | DataItemType.value                                           | 设置值 `受控`,                       |
| defaultValue         | DataItemType.value                                           | 设置默认值 `非受控`                  |
| height               | number `(320)`                                               | 设置 Dropdown 的高度                 |
| onChange             | (value:DataItemType.value, event)=>void                      | `value` 发生改变时的回调函数         |
| onSelect             | (value:DataItemType.value, item: DataItemType , event)=>void | 选项被点击选择后的回调函数           |
| onSearch             | (searchKeyword:string, event)=>void                          | 搜索的回调函数                       |
| onOpen               | ()=>void                                                     | 打开回调函数                         |
| onClose              | ()=>void                                                     | 关闭回调函数                         |
| onHide               | ()=>void                                                     | 隐藏时的回调函数                     |
| onGroupTitleClick    | (event)=>void                                                | 点击分组标题的回调函数               |
| placeholder          | React.Node `('Select')`                                      | 占位符                               |
| renderValue          | (label:React.Node, item: DataItemType)=>React.Node           | 自定义渲染被选中的选项               |
| renderMenu           | (menu:React.Node)=>React.Node                                | 自定义渲染菜单列表                   |
| renderMenuItem       | (label:React.Node, item:DataItemType)=>React.Node            | 自定义渲染选项                       |
| renderMenuGroup      | (groupTitle:React.Node, item:DataItemType)=>React.Node       | 自定义渲染选项组                     |
| searchable           | boolean `(true)`                                             | 可以搜索                             |
| cleanable            | boolean `(true)`                                             | 可以清除                             |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                | 位置                                 |
| menuClassName        | string                                                       | 应用于菜单 DOM 节点的 css class      |
| menuStyle            | Object                                                       | 应用于菜单 DOM 节点的 style          |
| container            | HTMLElement or (() => HTMLElement)                           | 设置渲染的容器                       |
| toggleComponentClass | React.ElementType `('a')`                                    | 为组件自定义元素类型                 |

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
  groupBy?: string;
};
```
