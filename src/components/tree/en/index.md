# Tree

- `<Tree>` Used to show a tree-structured data.

## Usage

```js
import { Tree } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Tree>`

| Property           | Type `(Default)`                                     | Description                                 |
| ------------------ | ---------------------------------------------------- | ------------------------------------------- |
| childrenKey        | string `('children')`                                | Tree data structure Children property name  |
| classPrefix        | string`('picker')`                                   | The prefix of the component CSS class       |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;           | Tree Data                                   |
| defaultExpandAll   | boolean                                              | Expand all nodes By default                 |
| defaultValue       | DataItemType.value                                   | Default selected Value                      |
| disabledItemValues | Array&lt;DataItemType.value&gt;                      | Disable item by value                       |
| expandAll          | boolean                                              | Expand or unExpand all nodes(Controlled)    |
| labelKey           | string `('label')`                                   | Tree data structure Label property name     |
| onChange           | (value:DataItemType.value)=>void                     | Callback function for data change           |
| onExpand           | (activeNode:DataItemType, layer:number)=>void        | Whether inline display tree                 |
| onSelect           | (activeNode:DataItemType, layer:number, event)=>void | Callback function after selecting tree node |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                  | Custom Render icon                          |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                  | Custom Render tree Node                     |
| searchKeyword      | string                                               | searchKeyword (Controlled)                  |
| value              | DataItemType.value                                   | Selected value                              |
| valueKey           | string `('value')`                                   | Tree data Structure Value property name     |

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## Related components

- [`<CheckTree>`](./check-tree) Selector component, which supports a Checkbox on the Treepicker node for multiple selections.
- [`<TreePicker>`](./tree-picker) Used to show a tree-structured data.
- [`<CheckTreePicker>`](./check-tree-picker) Used to show a tree-structured data while supporting Checkbox selection.
