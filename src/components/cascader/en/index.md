# Cascader

Single selection of data with hierarchical relationship structure.

* `<Cascader>`

## Usage

```js
import { Cascader } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Cascader>`

| Property           | Type`(Default)`                               | Description                                             |
| ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| classPrefix        | string `('rs-picker-cascader')`               | prefix of className                                     |
| data               | array                                         | compoent data                                           |
| disabled           | boolean                                       | disabled compnent                                       |
| disabledItemValues | array                                         | disabled items                                          |
| groupBy            | string                                        | set group condition key in data                         |
| valueKey           | string `('value')`                            | set value key in data                                   |
| labelKey           | string `('label')`                            | set label key in data                                   |
| childrenKey        | string `('children')`                         | set children key in data                      |
| value              | any                                           | (Controlled) specifies the values of the selected items |
| defaultValue       | any                                           | (UnControlled) default values of the selected items     |
| height             | number `(320)`                                | height of Dropdown                                      |
| onChange           | (value:any, event)=>void                      | callback fired when value change                        |
| onSelect           | (value:any, item: Object , event)=>void       | callback fired when item is selected                    |
| onSearch           | (searchKeyword:string, event)=>void           | callback fired when search                              |
| onOpen             | ()=>void                                      | callback fired when open component                      |
| onClose            | ()=>void                                      | callback fired when close component                     |
| onGroupTitleClick  | (event)=>void                                 | callback fired when click the group title               |
| placeholder        | React.Node `('Select')`                       |                                                         |
| renderValue        | (label:React.Node, item: Object)=>React.Node  | custom render selected items                            |
| renderMenuItem     | (label:React.Node, item: Object)=>React.Node  | custom render menuItems                                 |
| cleanable          | boolean `(true)`                              | Whether the selected value can be cleared               |
| open               | boolean                                       | Whether open the component                               |
| defaultOpen        | boolean                                       | default value of open property                          |
| placement          | enum: 'bottomLeft','topLeft' `('bottomLeft')` | placement of component                                  |
