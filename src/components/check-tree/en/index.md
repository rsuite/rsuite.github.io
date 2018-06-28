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

| Property           | Type `(Default)`                                                                            | Description                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| value              | Array&lt;DataItemType.value&gt;                                                             | Specifies the values of the selected tree node (Controlled) |
| defaultValue       | Array&lt;DataItemType.value&gt;                                                             | Default values of the selected tree node                    |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;                                                  | Tree data                                                   |
| valueKey           | string `('value')`                                                                          | Set value key in data                                       |
| labelKey           | string `('label')`                                                                          | Set label key in data                                       |
| childKey           | string `('children')`                                                                       | Set childrenKey key in data                                 |
| disabledItemValues | Array&lt;DataItemType.value&gt;                                                             | Values of disabled tree node                                |
| defaultExpandAll   | boolean                                                                                     | Expand all tree node                                        |
| expandAll          | boolean                                                                                     | Expand or unExpand all nodes(Controlled)                    |
| searchKeyword      | string                                                                                      | searchKeyword (Controlled)                                  |
| cascade            | boolean `(true)`                                                                            | Whether cascade select                                      |
| onChange           | (values:Array&lt;DataItemType.value&gt;)=>void                                              | Callback fired when value change                            |
| onExpand           | (activeNode:DataItemType, layer:number)=>void                                               | Callback fired when tree node expand state changed          |
| onSelect           | (activeNode:DataItemType.value, layer:number, values:Array&lt;DataItemType.value&gt;)=>void | Callback fired when tree node is selected                   |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                                                         | Custom render tree node                                     |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                                                         | Custom render the icon in tree node                         |

## Types

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## Related components

- [`<Tree>`](./tree)
- [`<TreePicker>`](./tree-picker)
- [`<CheckTreePicker>`](./check-tree-picker)
