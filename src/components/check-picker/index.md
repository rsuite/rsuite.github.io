# CheckPicker 多项选择器

用于多项数据选择，支持分组。

* `<CheckPicker>`

## 获取组件

```js
import { CheckPicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<CheckPicker>`

| 属性名称           | 类型`(默认值)`                                               | 描述                                 |
| ------------------ | ------------------------------------------------------------ | ------------------------------------ |
| classPrefix        | string `('picker-check')`                                    | className 前缀                       |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;                   | 组件数据                             |
| disabled           | boolean                                                      | 禁用组件                             |
| disabledItemValues | Array&lt;DataItemType.value&gt;                              | 禁用选项                             |
| groupBy            | string                                                       | 设置分组条件在 `data` 中的 `key`     |
| valueKey           | string `('value')`                                           | 设置选项值在 `data` 中的 `key`       |
| labelKey           | string `('label')`                                           | 设置选项显示内容在 `data` 中的 `key` |
| value              | Array&lt;DataItemType.value&gt;                              | 设置值 `受控`                        |
| defaultValue       | Array&lt;DataItemType.value&gt;                              | 设置默认值 `非受控`                  |
| height             | number `(320)`                                               | 设置 Dropdown 的高度                 |
| onChange           | (value:DataItemType.value, event)=>void                      | `value` 发生改变时的回调函数         |
| onSelect           | (value:DataItemType.value, item: DataItemType , event)=>void | 选项被点击选择后的回调函数           |
| onSearch           | (searchKeyword:string, event)=>void                          | 搜索的回调函数                       |
| onOpen             | ()=>void                                                     | 打开回调函数                         |
| onClose            | ()=>void                                                     | 关闭回调函数                         |
| onGroupTitleClick  | (event)=>void                                                | 点击分组标题的回调函数               |
| placeholder        | React.Node `('Select')`                                      | 占位符                               |
| renderValue        | (label:React.Node, item: DataItemType)=>React.Node           | 自定义被选中的选项                   |
| renderMenuItem     | (label:React.Node, item: DataItemType)=>React.Node           | 自定义选项                           |
| renderMenuGroup    | (groupTitle:React.Node, item:DataItemType)=>React.Node       | 自定义选项组                         |
| renderExtraFooter  | ()=>React.Node                                               | 自定义页脚内容                       |
| searchable         | boolean `(true)`                                             | 可以搜索                             |
| cleanable          | boolean `(true)`                                             | 可以清除                             |
| placement          | enum: [Placement](#Placement)`('bottomLeft')`                | 位置                                 |
| menuClassName      | string                                                       | 选项菜单的 className                 |

## Types

### Placement

```js
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  groupBy?: string;
};
```
