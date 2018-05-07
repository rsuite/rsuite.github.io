# CheckPicker multiple selector

Used for multiple data selection, support grouping.

* `<CheckPicker>`

## Usage

```js
import { CheckPicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<CheckPicker>`

| Property           | Type`(Default)`                                              | Description                                             |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| classPrefix        | string `('picker-select')`                                   | prefix of className                                     |
| data \*            | Array&lt;DataItemType&gt;                                    | componetn data                                          |
| disabled           | boolean                                                      | whether disabled componet                               |
| disabledItemValues | Array&lt;DataItemType.value&gt;                              | values of disabledItems                                 |
| groupBy            | string                                                       | set group condition key in data                         |
| valueKey           | string `('value')`                                           | set value key in data                                   |
| labelKey           | string `('label')`                                           | set label key in data                                   |
| value              | any                                                          | (Controlled) specifies the values of the selected items |
| defaultValue       | any                                                          | (UnControlled) default values of the selected items     |
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
| renderMenuGroup    | (groupTitle:React.Node, item:DataItemType)=>React.Node       | custom render menu Group                                |
| renderExtraFooter  | ()=>React.Node                                               | custom render extra footer                              |
| searchable         | boolean `(true)`                                             | whether dispaly search input box                        |
| cleanable          | boolean `(true)`                                             | whether the selected value can be cleared               |
| placement          | enum: [Placement](#Placement)`('bottomLeft')`                | placement of component                                  |

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
