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
| classPrefix          | string`('picker')`                                            | The prefix of the component CSS class           |
| value                | DataItemType.value                                            | Selected value                                  |
| defaultValue         | DataItemType.value                                            | Default selected Value                          |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                    | Tree data                                       |
| valueKey             | string `('value')`                                            | Tree data Structure Value property name         |
| labelKey             | string `('label')`                                            | Tree data structure Label property name         |
| childrenKey          | string `('children')`                                         | Tree data structure Children property name      |
| disabledItems        | Array&lt;DataItemType.value&gt;                               | Disable Node list                               |
| defaultExpandAll     | boolean                                                       | Expand all nodes By default                     |
| expandAll            | boolean                                                       | Expand or unExpand all nodes(Controlled)        |
| inline               | boolean                                                       | Whether inline display tree                     |
| open                 | boolean                                                       | Open (Controlled)                               |
| defaultOpen          | boolean                                                       | Open by default                                 |
| placeholder          | React.Node `('Select')`                                       | Placeholder                                     |
| disabled             | boolean                                                       | Whether to disable Picker                       |
| cleanable            | boolean `(true)`                                              | Set whether you can clear                       |
| seasrchable          | boolean `(true)`                                              | Set whether you can search                      |
| onSearch             | (searchKeyword:string, event)=>void                           | Search callback function                        |
| onOpen               | ()=>void                                                      | Open Dropdown callback function                 |
| onClose              | ()=>void                                                      | Close Dropdown callback functions               |
| onChange             | (value:DataItemType.value)=>void                              | Callback function for data change               |
| onExpand             | (activeNode:DataItemType, layer:number)=>void                 | Callback When tree node is displayed            |
| onSelect             | (activeNode:DataItemType, layer:number, event)=>void          | Callback function after selecting tree node     |
| renderTreeNode       | (nodeData:DataItemType)=>React.Node                           | Custom Render tree Node                         |
| renderTreeIcon       | (nodeData:DataItemType)=>React.Node                           | Custom Render icon                              |
| renderValue          | (activeNode:DataItemType, placeholder:React.Node)=>React.Node | Custom Render Placeholder                       |
| renderExtraFooter    | ()=>React.Node                                                | Customizing footer Content                      |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                 | Expand placement                                |
| menuClassName        | string                                                        | A css class to apply to the Menu DOM node       |
| menuStyle            | object                                                        | style for Menu                                  |
| container            | HTMLElement or (() => HTMLElement)                            | Sets the rendering container                    |
| toggleComponentClass | React.ElementType `('a')`                                     | You can use a custom element for this component |

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
