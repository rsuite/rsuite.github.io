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

| Property              | Type`(Default)`                                                                                 | Description                                               |
| --------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| appearance            | enum: 'default', 'subtle' `('default')`                                                         | Set picker appearence                                     |
| block                 | boolean                                                                                         | Blocking an entire row                                    |
| cascade               | boolean `(true)`                                                                                | whether cascade select                                    |
| classPrefix           | string `('picker')`                                                                             | The prefix of the component CSS class                     |
| data \*               | Array&lt;[DataItemType](#DataItemType)&gt;                                                      | The data of component                                     |
| disabled              | boolean                                                                                         | Disabled component                                        |
| disabledItemValues    | Array&lt;DataItemType.value&gt;                                                                 | Disabled items                                            |
| valueKey              | string `('value')`                                                                              | Set value key in data                                     |
| labelKey              | string `('label')`                                                                              | Set label key in data                                     |
| childrenKey           | string `('children')`                                                                           | Set children key in data                                  |
| value                 | Array&lt;[DataItemType](#DataItemType)&gt;                                                      | Specifies the values of the selected items(Controlled)    |
| defaultValue          | Array&lt;[DataItemType](#DataItemType)&gt;                                                      | Default values of the selected items                      |
| height                | number `(320)`                                                                                  | The height of Dropdown                                    |
| menuWidth             | number `(156)`                                                                                  | Sets the width of the menu                                |
| menuHeight            | number `(200)`                                                                                  | Sets the height of the menu                               |
| onChange              | (value:Array&lt;[DataItemType](#DataItemType)&gt; , event)=>void                                | Callback fired when value change                          |
| onSelect              | (item:DataItemType, activePaths: Array, event: DefaultEvent)=>void                              | Callback fired when item is selected                      |
| onOpen                | ()=>void                                                                                        | Callback fired when open component                        |
| onClose               | ()=>void                                                                                        | Callback fired when close component                       |
| onGroupTitleClick     | (event)=>void                                                                                   | Callback fired when click the group title                 |
| placeholder           | React.Node `('Select')`                                                                         | Setting  placeholders                                     |
| renderValue           | (value:Array&lt;any&gt;,selectedItems: Array&lt;[DataItemType](#DataItemType)&gt; )=>React.Node | Custom render selected items                              |
| renderMenuItem        | (label:React.Node, item: DataItemType)=>React.Node                                              | Custom render menu items                                   |
| cleanable             | boolean `(true)`                                                                                | Whether the selected value can be cleared                 |
| open                  | boolean                                                                                         | Whether open the component                                |
| defaultOpen           | boolean                                                                                         | Default value of open property                            |
| placement             | enum: [Placement](#Placement)`('bottomLeft')`                                                   | The placement of component                                |
| container             | HTMLElement or (() => HTMLElement)                                                              | Sets the rendering container                              |
| toggleComponentClass  | React.ElementType `('a')`                                                                       | You can use a custom element for this component           |
| uncheckableItemValues | Array&lt;DataItemType.value&gt;                                                                 | Set the option value for the check box not to be rendered |



## Types

### Placement

```ts
type Placement = 'bottomLeft' | 'topLeft' | 'autoVerticalLeft';
```

### DataItemType

```ts
type DataItemType = {
  value: string | number;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
