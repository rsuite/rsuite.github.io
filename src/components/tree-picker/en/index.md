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

| Property             | Type `(Default)`                                                                        | Description                                     |
| -------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                                                 | Set picker appearence                           |
| block                | boolean                                                                                 | Blocking an entire row                          |
| childrenKey          | string `('children')`                                                                   | Tree data structure Children property name      |
| classPrefix          | string`('picker')`                                                                      | The prefix of the component CSS class           |
| cleanable            | boolean `(true)`                                                                        | Set whether you can clear                       |
| container            | HTMLElement or (() => HTMLElement)                                                      | Sets the rendering container                    |
| data \*              | Array&lt;[DataItemType](#types)&gt;                                                     | Tree data                                       |
| defaultExpandAll     | boolean                                                                                 | Expand all nodes By default                     |
| defaultOpen          | boolean                                                                                 | Open by default                                 |
| defaultValue         | string                                                                                  | Default selected Value                          |
| disabled             | boolean                                                                                 | Whether to disable Picker                       |
| disabledItemValues   | Array&lt;string&gt;                                                                     | Disable item by value                           |
| expandAll            | boolean                                                                                 | Expand or unExpand all nodes(Controlled)        |
| inline               | boolean                                                                                 | Whether inline display tree                     |
| labelKey             | string `('label')`                                                                      | Tree data structure Label property name         |
| menuClassName        | string                                                                                  | A css class to apply to the Menu DOM node       |
| menuStyle            | React.CSSProperties                                                                     | style for Menu                                  |
| onChange             | (value:string)=>void                                                                    | Callback function for data change               |
| onClose              | ()=>void                                                                                | Close Dropdown callback functions               |
| onExpand             | (activeNode:[DataItemType](#types), layer:number, concat:(data, children)=>Array)=>void | Callback When tree node is displayed            |
| onOpen               | ()=>void                                                                                | Open Dropdown callback function                 |
| onSearch             | (searchKeyword:string, event)=>void                                                     | Search callback function                        |
| onSelect             | (activeNode:[DataItemType](#types), layer:number, event)=>void                          | Callback function after selecting tree node     |
| open                 | boolean                                                                                 | Open (Controlled)                               |
| placeholder          | React.Node `('Select')`                                                                 | Placeholder                                     |
| placement            | enum: [Placement](#types)`('bottomLeft')`                                               | Expand placement                                |
| renderExtraFooter    | ()=>React.Node                                                                          | Customizing footer Content                      |
| renderTreeIcon       | (nodeData:[DataItemType](#types))=>React.Node                                           | Custom Render icon                              |
| renderTreeNode       | (nodeData:[DataItemType](#types))=>React.Node                                           | Custom Render tree Node                         |
| renderValue          | (activeNode:[DataItemType](#types), placeholder:React.Node)=>React.Node                 | Custom Render Placeholder                       |
| seasrchable          | boolean `(true)`                                                                        | Set whether you can search                      |
| toggleComponentClass | React.ElementType `('a')`                                                               | You can use a custom element for this component |
| value                | string                                                                                  | Selected value                                  |
| valueKey             | string `('value')`                                                                      | Tree data Structure Value property name         |


## Related components

- [`<CheckTreePicker>`](./check-tree-picker) Selector component, which supports a Checkbox on the Treepicker node for multiple selections.
- [`<Tree>`](./tree) Used to show a tree-structured data.
- [`<CheckTree>`](./check-tree) Used to show a tree-structured data while supporting Checkbox selection.
