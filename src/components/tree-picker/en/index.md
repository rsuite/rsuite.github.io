# TreePicker

- `<TreePicker>` Selector component, tree single selector.

## Usage

```js
import { TreePicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<TreePicker>`

| Property             | Type `(Default)`                                              | Description                                     |
| -------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                       | Set picker appearence                           |
| block                | boolean                                                       | Blocking an entire row                          |
| childrenKey          | string `('children')`                                         | Tree data structure Children property name      |
| classPrefix          | string`('picker')`                                            | The prefix of the component CSS class           |
| cleanable            | boolean `(true)`                                              | Set whether you can clear                       |
| container            | HTMLElement or (() => HTMLElement)                            | Sets the rendering container                    |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                    | Tree data                                       |
| defaultExpandAll     | boolean                                                       | Expand all nodes By default                     |
| defaultOpen          | boolean                                                       | Open by default                                 |
| defaultValue         | DataItemType.value                                            | Default selected Value                          |
| disabled             | boolean                                                       | Whether to disable Picker                       |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                               | Disable item by value                           |
| expandAll            | boolean                                                       | Expand or unExpand all nodes(Controlled)        |
| inline               | boolean                                                       | Whether inline display tree                     |
| labelKey             | string `('label')`                                            | Tree data structure Label property name         |
| menuClassName        | string                                                        | A css class to apply to the Menu DOM node       |
| menuStyle            | object                                                        | style for Menu                                  |
| onChange             | (value:DataItemType.value)=>void                              | Callback function for data change               |
| onClose              | ()=>void                                                      | Close Dropdown callback functions               |
| onExpand             | (activeNode:DataItemType, layer:number)=>void                 | Callback When tree node is displayed            |
| onOpen               | ()=>void                                                      | Open Dropdown callback function                 |
| onSearch             | (searchKeyword:string, event)=>void                           | Search callback function                        |
| onSelect             | (activeNode:DataItemType, layer:number, event)=>void          | Callback function after selecting tree node     |
| open                 | boolean                                                       | Open (Controlled)                               |
| placeholder          | React.Node `('Select')`                                       | Placeholder                                     |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                 | Expand placement                                |
| renderExtraFooter    | ()=>React.Node                                                | Customizing footer Content                      |
| renderTreeIcon       | (nodeData:DataItemType)=>React.Node                           | Custom Render icon                              |
| renderTreeNode       | (nodeData:DataItemType)=>React.Node                           | Custom Render tree Node                         |
| renderValue          | (activeNode:DataItemType, placeholder:React.Node)=>React.Node | Custom Render Placeholder                       |
| seasrchable          | boolean `(true)`                                              | Set whether you can search                      |
| toggleComponentClass | React.ElementType `('a')`                                     | You can use a custom element for this component |
| value                | DataItemType.value                                            | Selected value                                  |
| valueKey             | string `('value')`                                            | Tree data Structure Value property name         |

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
  children?: Array<DataItemType>;
};
```

## Related components

- [`<CheckTreePicker>`](./check-tree-picker) Selector component, which supports a Checkbox on the Treepicker node for multiple selections.
- [`<Tree>`](./tree) Used to show a tree-structured data.
- [`<CheckTree>`](./check-tree) Used to show a tree-structured data while supporting Checkbox selection.
