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

| Property             | Type`(Default)`                                                    | Description                                            |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| classPrefix          | string `('picker-cascader')`                                       | The prefix of the component CSS class                  |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                         | The data of component                                  |
| disabled             | boolean                                                            | Disabled component                                     |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                                    | Disabled items                                         |
| groupBy              | string                                                             | Set group condition key in data                        |
| valueKey             | string `('value')`                                                 | Set value key in data                                  |
| labelKey             | string `('label')`                                                 | Set label key in data                                  |
| childrenKey          | string `('children')`                                              | Set children key in data                               |
| value                | DataItemType.value                                                 | Specifies the values of the selected items(Controlled) |
| defaultValue         | DataItemType.value                                                 | DÏefault values of the selected items                  |
| height               | number `(320)`                                                     | The height of Dropdown                                 |
| onChange             | (value:DataItemType.value, event)=>void                            | Callback fired when value change                       |
| onSelect             | (item:DataItemType, activePaths: Array, event: DefaultEvent)=>void | Callback fired when item is selected                   |
| onSearch             | (searchKeyword:string, event)=>void                                | Callback fired when search                             |
| onOpen               | ()=>void                                                           | Callback fired when open component                     |
| onClose              | ()=>void                                                           | Callback fired when close component                    |
| onGroupTitleClick    | (event)=>void                                                      | Callback fired when click the group title              |
| placeholder          | React.Node `('Select')`                                            | Setting  placeholders                                  |
| renderValue          | (label:React.Node, item: DataItemType)=>React.Node                 | Custom render selected items                           |
| renderMenuItem       | (label:React.Node, item: DataItemType)=>React.Node                 | Custom render menuItems                                |
| cleanable            | boolean `(true)`                                                   | Whether the selected value can be cleared              |
| open                 | boolean                                                            | Whether open the component                             |
| defaultOpen          | boolean                                                            | Default value of open property                         |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                      | The placement of component                             |
| container            | HTMLElement or (() => HTMLElement)                                 | Sets the rendering container                           |
| toggleComponentClass | React.ElementType `('a')`                                          | You can use a custom element for this component        |


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
