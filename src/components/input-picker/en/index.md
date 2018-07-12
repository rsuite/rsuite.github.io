# InputPicker

Single item selector with text box input

* `<InputPicker>`

## Usage

```js
import { InputPicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<InputPicker>`


| Property             | Type `(Default)`                                       | Description                                            |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| classPrefix          | string `('picker')`                                    | The prefix of the component CSS class                  |
| creatable            | boolean `(true)`                                       | Settings can create new options                        |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;             | Selectable data                                        |
| block                | boolean                                                | Blocking an entire row                                 |
| groupBy              | string                                                 | Set grouping criteria 'key' in 'data'                  |
| valueKey             | string `('value')`                                     | Set option value 'key' in 'data'                       |
| labelKey             | string `('label')`                                     | Set options to display the 'key' in 'data'             |
| disabled             | boolean                                                | Whether or not component is disabled                   |
| disabledItemValues   | Array&lt;string&gt;                                    | Disable optional                                       |
| value                | string                                                 | Value (Controlled)                                     |
| defaultValue         | string                                                 | Default value                                          |
| height               | number `(320)`                                         | Set the height of the Dropdown                         |
| onChange             | (value:string, event)=>void                            | callback function when value changes                   |
| onSelect             | (value:string, item: DataItemType , event)=>void       | option is clicked after the selected callback function |
| onSearch             | (searchKeyword:string, event)=>void                    | callback function for Search                           |
| onOpen               | ()=>void                                               | Open callback function                                 |
| onClose              | ()=>void                                               | Close callback functions                               |
| onGroupTitleClick    | (event)=>void                                          | Click the callback function for the group header       |
| placeholder          | React.Node `('Select')`                                | Setting placeholders                                   |
| renderValue          | (value:string, item: DataItemType)=>React.Node         | Custom Render selected options                         |
| renderMenu           | (menu:React.Node)=>React.Node                          | Customizing the Rendering Menu list                    |
| renderMenuItem       | (label:React.Node, item:DataItemType)=>React.Node      | Custom Render Options                                  |
| renderMenuGroup      | (groupTitle:React.Node, item:DataItemType)=>React.Node | Custom Render Options Group                            |
| searchable           | boolean `(true)`                                       | Whether you can search for options.                    |
| cleanable            | boolean `(true)`                                       | Whether the option can be emptied.                     |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`          | The placement of component                             |
| menuClassName        | string                                                 | A css class to apply to the Menu DOM node.             |
| container            | HTMLElement or (() => HTMLElement)                     | Sets the rendering container                           |
| toggleComponentClass | React.ElementType `('a')`                              | You can use a custom element for this component        |

## Types


### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  groupBy?: string;
};
```