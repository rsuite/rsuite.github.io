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

| Property           | Type `(Default)`                                                    | Description                                                 |
| ------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| cascade            | boolean `(true)`                                                    | Whether cascade select                                      |
| childKey           | string `('children')`                                               | Set childrenKey key in data                                 |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;                          | Tree data                                                   |
| defaultExpandAll   | boolean                                                             | Expand all tree node                                        |
| defaultValue       | Array&lt;string&gt;                                                 | Default values of the selected tree node                    |
| disabledItemValues | Array&lt;string&gt;                                                 | Values of disabled tree node                                |
| expandAll          | boolean                                                             | Expand or unExpand all nodes(Controlled)                    |
| labelKey           | string `('label')`                                                  | Set label key in data                                       |
| onChange           | (values:Array&lt;string&gt;)=>void                                  | Callback fired when value change                            |
| onExpand           | (activeNode:DataItemType, layer:number)=>void                       | Callback fired when tree node expand state changed          |
| onSelect           | (activeNode:string, layer:number, values:Array&lt;string&gt;)=>void | Callback fired when tree node is selected                   |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                                 | Custom render the icon in tree node                         |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                                 | Custom render tree node                                     |
| searchKeyword      | string                                                              | searchKeyword (Controlled)                                  |
| value              | Array&lt;string&gt;                                                 | Specifies the values of the selected tree node (Controlled) |
| valueKey           | string `('value')`                                                  | Set value key in data                                       |

## Types

### DataItemType

```ts
type DataItemType = {
  value: string;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## Related components

- [`<Tree>`](./tree)
- [`<TreePicker>`](./tree-picker)
- [`<CheckTreePicker>`](./check-tree-picker)
