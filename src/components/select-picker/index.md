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

| 属性名称           | 类型`(默认值)`                                   | 描述                                 |
| ------------------ | ------------------------------------------------ | ------------------------------------ |
| classPrefix        | string `('picker-select')`                       | className 前缀                       |
| data               | Array<any>                                       | 组件数据                             |
| disabled           | boolean                                          | 禁用组件                             |
| disabledItemValues | array                                            | 禁用选项                             |
| groupBy            | string                                           | 设置分组条件在 `data` 中的 `key`     |
| valueKey           | string `('value')`                               | 设置选项值在 `data` 中的 `key`       |
| labelKey           | string `('label')`                               | 设置选项显示内容在 `data` 中的 `key` |
| value              | any                                              | 设置值 `受控`                        |
| defaultValue       | any                                              | 设置默认值 `非受控`                  |
| height             | number `(320)`                                   | 设置 Dropdown 的高度                 |
| onChange           | (value:any, event)=>void                         | `value` 发生改变时的回调函数         |
| onSelect           | (value:any, item: Object , event)=>void          | 选项被点击选择后的回调函数           |
| onSearch           | (searchKeyword:string, event)=>void              | 搜索的回调函数                       |
| onOpen             | ()=>void                                         | 打开回调函数                         |
| onClose            | ()=>void                                         | 关闭回调函数                         |
| onGroupTitleClick  | (event)=>void                                    | 点击分组标题的回调函数               |
| placeholder        | React.Node `('Select')`                          | 占位符                               |
| renderValue        | (label:React.Node, item: Object)=>React.Node     | 自定义渲染被选中的选项               |
| renderMenu         | (menu:React.Node)=>React.Node                    | 自定义渲染菜单列表                   |
| renderMenuItem     | (label:React.Node, item:Object)=>React.Node      | 自定义渲染选项                       |
| renderMenuGroup    | (groupTitle:React.Node, item:Object)=>React.Node | 自定义渲染选项组                     |
| locale             | Object                                           | 本地语言                             |
| searchable         | boolean `(true)`                                 | 可以搜索                             |
| cleanable          | boolean `(true)`                                 | 可以清除                             |
| placement          | enum: Placement`('bottomLeft')`                  | 位置                                 |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```
