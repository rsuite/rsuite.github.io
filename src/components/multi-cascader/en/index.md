# MultiCascader

Single selection of data with hierarchical relationship structure.

* `<MultiCascader>`

## Usage

```js
import { MultiCascader } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<MultiCascader>`

| Property              | Type`(Default)`                                                                   | Description                                               |
| --------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| appearance            | enum: 'default', 'subtle' `('default')`                                           | Set picker appearence                                     |
| block                 | boolean                                                                           | Blocking an entire row                                    |
| cascade               | boolean `(true)`                                                                  | whether cascade select                                    |
| childrenKey           | string `('children')`                                                             | Set children key in data                                  |
| classPrefix           | string `('picker')`                                                               | The prefix of the component CSS class                     |
| cleanable             | boolean `(true)`                                                                  | Whether the selected value can be cleared                 |
| container             | HTMLElement or (() => HTMLElement)                                                | Sets the rendering container                              |
| countable             | boolean `(true)`                                                                  | Can count selected options                                |
| data \*               | Array&lt;[DataItemType](#DataItemType)&gt;                                        | The data of component                                     |
| defaultOpen           | boolean                                                                           | Default value of open property                            |
| defaultValue          | Array&lt;string&gt;                                                               | Default values of the selected items                      |
| disabled              | boolean                                                                           | Disabled component                                        |
| disabledItemValues    | Array&lt;string&gt;                                                               | Disabled items                                            |
| height                | number `(320)`                                                                    | The height of Dropdown                                    |
| labelKey              | string `('label')`                                                                | Set label key in data                                     |
| menuHeight            | number `(200)`                                                                    | Sets the height of the menu                               |
| menuWidth             | number `(156)`                                                                    | Sets the width of the menu                                |
| onChange              | (value:Array&lt;string&gt; , event)=>void                                         | Callback fired when value change                          |
| onClose               | ()=>void                                                                          | Callback fired when close component                       |
| onGroupTitleClick     | (event)=>void                                                                     | Callback fired when click the group title                 |
| onOpen                | ()=>void                                                                          | Callback fired when open component                        |
| onSelect              | (item:DataItemType, activePaths: Array, concat:(data, children)=>Array)=>void     | Callback fired when item is selected                      |
| open                  | boolean                                                                           | Whether open the component                                |
| placeholder           | React.Node `('Select')`                                                           | Setting placeholders                                      |
| placement             | enum: [Placement](#Placement)`('bottomLeft')`                                     | The placement of component                                |
| renderMenuItem        | (label:React.Node, item: DataItemType)=>React.Node                                | Custom render menu items                                  |
| renderValue           | (value:Array&lt;string&gt;,selectedItems: Array&lt;DataItemType&gt; )=>React.Node | Custom render selected items                              |
| toggleComponentClass  | React.ElementType `('a')`                                                         | You can use a custom element for this component           |
| uncheckableItemValues | Array&lt;string&gt;                                                               | Set the option value for the check box not to be rendered |
| value                 | Array&lt;string&gt;                                                               | Specifies the values of the selected items(Controlled)    |
| valueKey              | string `('value')`                                                                | Set value key in data                                     |



## Types

### Placement

```ts
type Placement = 'bottomLeft' | 'topLeft' | 'autoVerticalLeft';
```

### DataItemType

```ts
type DataItemType = {
  value: string;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
