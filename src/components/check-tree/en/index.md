# CheckTree

- `<CheckTree>` is used to display a tree structure data and supports Checkbox selection.

## Usage

```js
import { CheckTree } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<CheckTree>`

| Property              | Type `(Default)`                                                    | Description                                                 |
| --------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| cascade               | boolean `(true)`                                                    | Whether cascade select                                      |
| childKey              | string `('children')`                                               | Set childrenKey key in data                                 |
| data \*               | Array&lt;[DataItemType](#types)&gt;                                 | Tree data                                                   |
| defaultExpandAll      | boolean                                                             | Expand all tree node                                        |
| defaultValue          | string[]                                                 | Default values of the selected tree node                    |
| disabledItemValues    | string[]                                                 | Values of disabled tree node                                |
| expandAll             | boolean                                                             | Expand or unExpand all nodes(Controlled)                    |
| labelKey              | string `('label')`                                                  | Set label key in data                                       |
| onChange              | (values:string[])=>void                                  | Callback fired when value change                            |
| onExpand              | (activeNode:[DataItemType](#types), layer:number)=>void             | Callback fired when tree node expand state changed          |
| onSelect              | (activeNode:string, layer:number, values:string[])=>void | Callback fired when tree node is selected                   |
| renderTreeIcon        | (nodeData:[DataItemType](#types))=>React.Node                       | Custom render the icon in tree node                         |
| renderTreeNode        | (nodeData:[DataItemType](#types))=>React.Node                       | Custom render tree node                                     |
| searchKeyword         | string                                                              | searchKeyword (Controlled)                                  |
| uncheckableItemValues | string[]                                                 | Set the option value for the check box not to be rendered   |
| value                 | string[]                                                 | Specifies the values of the selected tree node (Controlled) |
| valueKey              | string `('value')`                                                  | Set value key in data                                       |



## Related components

- [`<Tree>`](./tree)
- [`<TreePicker>`](./tree-picker)
- [`<CheckTreePicker>`](./check-tree-picker)
