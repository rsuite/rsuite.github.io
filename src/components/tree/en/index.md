# Tree

* `<Tree>` Used to show a tree-structured data.

## Usage

```js
import { Tree } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Tree>`

| Property         | Type `(Default)`                                     | Description                                 |
| ---------------- | ---------------------------------------------------- | ------------------------------------------- |
| classPrefix      | string`('picker-tree')`                              | The prefix for component CSS class                         |
| value            | Array&lt;DataItemType.value&gt;                      | Selected value                              |
|                  |
| defaultValue     | Array&lt;DataItemType.value&gt;                      | Default selected Value                      |
|                  |
| data \*          | Array&lt;[DataItemType](#DataItemType)&gt;           | Tree Data                                   |
| valueKey         | string `('value')`                                   | Tree data Structure Value property name     |
| labelKey         | string `('label')`                                   | Tree data structure Label property name     |
| childrenKey      | string `('children')`                                | Tree data structure Children property name  |
| disabledItems    | Array&lt;DataItemType.value&gt;                      | Disable Node list                           |
|                  |
| defaultExpandAll | boolean                                              | Expand all nodes By default                 |
|                  |
| onExpand         | (activeNode:DataItemType, layer:number)=>void        | Whether inline display tree                 |
|                  |
| onSelect         | (activeNode:DataItemType, layer:number, event)=>void | Callback function after selecting tree node |
|                  |
| onChange         | (value:DataItemType.value)=>void                     | Callback function for data change           |
|                  |
| renderTreeNode   | (nodeData:DataItemType)=>React.Node                  | Custom Render tree Node                     |
|                  |
| renderTreeIcon   | (nodeData:DataItemType)=>React.Node                  | Custom Render icon                          |
|                  |

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## Related components

* [`<CheckTree>`](./check-tree) Selector component, which supports a Checkbox on the Treepicker node for multiple selections.
* [`<TreePicker>`](./tree-picker) Used to show a tree-structured data.
* [`<CheckTreePicker>`](./check-tree-picker) Used to show a tree-structured data while supporting Checkbox selection.