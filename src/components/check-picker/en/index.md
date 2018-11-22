# CheckPicker

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

| Property             | Type`(Default)`                                                  | Description                                             |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                          | Set picker appearence                                   |
| block                | boolean                                                          | Blocking an entire row                                  |
| classPrefix          | string `('picker')`                                              | The prefix of the component CSS class                   |
| cleanable            | boolean `(true)`                                                 | Whether the selected value can be cleared               |
| container            | HTMLElement or (() => HTMLElement)                               | Sets the rendering container                            |
| data \*              | Array&lt;DataItemType&gt;                                        | The data of component                                   |
| defaultValue         | any                                                              | Default values of the selected items                    |
| disabled             | boolean                                                          | Whether disabled componet                               |
| disabledItemValues   | Array&lt;string&gt;                                              | Disable item by value                                   |
| groupBy              | string                                                           | Set group condition key in data                         |
| height               | number `(320)`                                                   | The height of Dropdown                                  |
| labelKey             | string `('label')`                                               | Set label key in data                                   |
| menuClassName        | string                                                           | A css class to apply to the Menu DOM node.              |
| menuStyle            | Object                                                           | A style to apply to the Menu DOM node.                  |
| onChange             | (value:string, event)=>void                                      | Callback fired when value change                        |
| onClose              | ()=>void                                                         | Callback fired when close component                     |
| onGroupTitleClick    | (event)=>void                                                    | Callback fired when click the group title               |
| onOpen               | ()=>void                                                         | Callback fired when open component                      |
| onSearch             | (searchKeyword:string, event)=>void                              | Callback fired when search                              |
| onSelect             | (value:string, item: DataItemType , event)=>void                 | Callback fired when item is selected                    |
| placeholder          | React.Node `('Select')`                                          | Setting placeholders                                    |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                    | The placement of component                              |
| renderExtraFooter    | ()=>React.Node                                                   | Custom render extra footer                              |
| renderMenu           | (menu:React.Node)=>React.Node                                    | Customizing the Rendering Menu list                     |
| renderMenuGroup      | (groupTitle:React.Node, item:DataItemType)=>React.Node           | Custom render menu group                                |
| renderMenuItem       | (label:React.Node, item: DataItemType)=>React.Node               | Custom render menu items                                |
| renderValue          | (value: Array&lt;any&gt;, items: Array&lt;any&gt;) => React.Node | Custom render selected items                            |
| searchable           | boolean `(true)`                                                 | Whether dispaly search input box                        |
| sticky               | boolean                                                          | Top the selected option in the options                  |
| toggleComponentClass | React.ElementType `('a')`                                        | You can use a custom element for this component         |
| value                | any                                                              | Specifies the values of the selected items (Controlled) |
| valueKey             | string `('value')`                                               | Set value key in data                                   |

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
  value: string;
  label: React.Node;
  groupBy?: string;
};
```
