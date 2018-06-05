# SelectPicker

For a single data selection, support grouping.

* `<SelectPicker>`

## Usage

```js
import { SelectPicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<SelectPicker>`

| Property           | Type `(Default)`                                             | Description                                            |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------ |
| classPrefix        | string `('picker-select')`                                   | The prefix of the component CSS class                  |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;                   | Selectable data                                        |
| groupBy            | string                                                       | Set grouping criteria 'key' in 'data'                  |
| valueKey           | string `('value')`                                           | Set option value 'key' in 'data'                       |
| labelKey           | string `('label')`                                           | Set options to display the 'key' in 'data'             |
| disabled           | boolean                                                      | Whether or not component is disabled                   |
| disabledItemValues | Array&lt;DataItemType.value&gt;                              | Disable optional                                       |
| value              | DataItemType.value                                           | Value (Controlled)                                     |
| defaultValue       | DataItemType.value                                           | Default value                                          |
| height             | number `(320)`                                               | Set the height of the Dropdown                         |
| onChange           | (value:DataItemType.value, event)=>void                      | callback function when value changes                   |
| onSelect           | (value:DataItemType.value, item: DataItemType , event)=>void | option is clicked after the selected callback function |
| onSearch           | (searchKeyword:string, event)=>void                          | callback function for Search                           |
| onOpen             | ()=>void                                                     | Open callback function                                 |
| onClose            | ()=>void                                                     | Close callback functions                               |
| onGroupTitleClick  | (event)=>void                                                | Click the callback function for the group header       |
| placeholder        | React.Node `('Select')`                                      | Setting placeholders                                   |
| renderValue        | (label:React.Node, item: DataItemType)=>React.Node           | Custom Render selected options                         |
| renderMenu         | (menu:React.Node)=>React.Node                                | Customizing the Rendering Menu list                    |
| renderMenuItem     | (label:React.Node, item:DataItemType)=>React.Node            | Custom Render Options                                  |
| renderMenuGroup    | (groupTitle:React.Node, item:DataItemType)=>React.Node       | Custom Render Options Group                            |
| searchable         | boolean `(true)`                                             | Whether you can search for options.                    |
| cleanable          | boolean `(true)`                                             | Whether the option can be emptied.                     |
| placement          | enum: [Placement](#Placement)`('bottomLeft')`                | The placement of component                             |
| menuClassName      | string                                                       | A css class to apply to the Menu DOM node.             |

                                      |

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
