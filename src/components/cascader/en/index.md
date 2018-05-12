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

| Property           | Type`(Default)`                                              | Description                                             |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| classPrefix        | string `('picker-cascader')`                                 | The prefix of the component CSS class                                     |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;                   | compoent data                                           |
| disabled           | boolean                                                      | disabled compnent                                       |
| disabledItemValues | Array&lt;DataItemType.value&gt;                              | disabled items                                          |
| groupBy            | string                                                       | set group condition key in data                         |
| valueKey           | string `('value')`                                           | set value key in data                                   |
| labelKey           | string `('label')`                                           | set label key in data                                   |
| childrenKey        | string `('children')`                                        | set children key in data                                |
| value              | DataItemType.value                                           | (Controlled) specifies the values of the selected items |
| defaultValue       | DataItemType.value                                           | (UnControlled) default values of the selected items     |
| height             | number `(320)`                                               | height of Dropdown                                      |
| onChange           | (value:DataItemType.value, event)=>void                      | callback fired when value change                        |
| onSelect           | (value:DataItemType.value, item: DataItemType , event)=>void | callback fired when item is selected                    |
| onSearch           | (searchKeyword:string, event)=>void                          | callback fired when search                              |
| onOpen             | ()=>void                                                     | callback fired when open component                      |
| onClose            | ()=>void                                                     | callback fired when close component                     |
| onGroupTitleClick  | (event)=>void                                                | callback fired when click the group title               |
| placeholder        | React.Node `('Select')`                                      |                                                         |
| renderValue        | (label:React.Node, item: DataItemType)=>React.Node           | custom render selected items                            |
| renderMenuItem     | (label:React.Node, item: DataItemType)=>React.Node           | custom render menuItems                                 |
| cleanable          | boolean `(true)`                                             | Whether the selected value can be cleared               |
| open               | boolean                                                      | Whether open the component                              |
| defaultOpen        | boolean                                                      | default value of open property                          |
| placement          | enum: [Placement](#Placement)`('bottomLeft')`                | placement of component                                  |

## Types

### Placement

```ts
type Placement = 'bottomLeft' | 'topLeft';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
