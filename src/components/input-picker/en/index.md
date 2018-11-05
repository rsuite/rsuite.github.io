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
| block                | boolean                                                | Blocking an entire row                                 |
| classPrefix          | string `('picker')`                                    | The prefix of the component CSS class                  |
| cleanable            | boolean `(true)`                                       | Whether the option can be emptied.                     |
| container            | HTMLElement or (() => HTMLElement)                     | Sets the rendering container                           |
| creatable            | boolean `(true)`                                       | Settings can create new options                        |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;             | Selectable data                                        |
| defaultValue         | string                                                 | Default value                                          |
| disabled             | boolean                                                | Whether or not component is disabled                   |
| disabledItemValues   | Array&lt;string&gt;                                    | Disable optional                                       |
| groupBy              | string                                                 | Set grouping criteria 'key' in 'data'                  |
| height               | number `(320)`                                         | Set the height of the Dropdown                         |
| labelKey             | string `('label')`                                     | Set options to display the 'key' in 'data'             |
| menuClassName        | string                                                 | A css class to apply to the Menu DOM node.             |
| menuStyle            | Object                                                 | A style to apply to the Menu DOM node.                 |
| onChange             | (value:string, event)=>void                            | callback function when value changes                   |
| onClose              | ()=>void                                               | Close callback functions                               |
| onGroupTitleClick    | (event)=>void                                          | Click the callback function for the group header       |
| onOpen               | ()=>void                                               | Open callback function                                 |
| onSearch             | (searchKeyword:string, event)=>void                    | callback function for Search                           |
| onSelect             | (value:string, item: DataItemType , event)=>void       | option is clicked after the selected callback function |
| placeholder          | React.Node `('Select')`                                | Setting placeholders                                   |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`          | The placement of component                             |
| renderMenu           | (menu:React.Node)=>React.Node                          | Customizing the Rendering Menu list                    |
| renderMenuGroup      | (groupTitle:React.Node, item:DataItemType)=>React.Node | Custom Render Options Group                            |
| renderMenuItem       | (label:React.Node, item:DataItemType)=>React.Node      | Custom Render Options                                  |
| renderValue          | (value:string, item: DataItemType)=>React.Node         | Custom Render selected options                         |
| searchable           | boolean `(true)`                                       | Whether you can search for options.                    |
| toggleComponentClass | React.ElementType `('a')`                              | You can use a custom element for this component        |
| value                | string                                                 | Value (Controlled)                                     |
| valueKey             | string `('value')`                                     | Set option value 'key' in 'data'                       |

## Types


### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  groupBy?: string;
};
```