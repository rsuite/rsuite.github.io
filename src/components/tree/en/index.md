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

| Property           | Type `(Default)`                                     | Description                                                               |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| childrenKey        | string `('children')`                                | Tree data structure Children property name                                |
| classPrefix        | string`('picker')`                                   | The prefix of the component CSS class                                     |
| data \*            | Array&lt;[DataItemType](#DataItemType)&gt;           | Tree Data                                                                 |
| defaultExpandAll   | boolean                                              | Expand all nodes By default                                               |
| defaultValue       | string                                               | Default selected Value                                                    |
| disabledItemValues | string[]                                             | Disable item by value                                                     |
| expandAll          | boolean                                              | Expand or unExpand all nodes(Controlled)                                  |
| height             | number `(360px)`                                     | height of menu. When `virtualize` is true, you can set the height of menu |
| labelKey           | string `('label')`                                   | Tree data structure Label property name                                   |
| onChange           | (value:string)=>void                                 | Callback function for data change                                         |
| onExpand           | (activeNode:DataItemType, layer:number)=>void        | Whether inline display tree                                               |
| onSelect           | (activeNode:DataItemType, layer:number, event)=>void | Callback function after selecting tree node                               |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                  | Custom Render icon                                                        |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                  | Custom Render tree Node                                                   |
| searchKeyword      | string                                               | searchKeyword (Controlled)                                                |
| value              | string                                               | Selected value                                                            |
| valueKey           | string `('value')`                                   | Tree data Structure Value property name                                   |
| virtualized        | boolean `(false)`                                    | Whether using Virtualized List                                            |

### DataItemType

```ts
type DataItemType = {
  value: string;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## Related components

- [`<CheckTree>`](./check-tree) Selector component, which supports a Checkbox on the Treepicker node for multiple selections.
- [`<TreePicker>`](./tree-picker) Used to show a tree-structured data.
- [`<CheckTreePicker>`](./check-tree-picker) Used to show a tree-structured data while supporting Checkbox selection.
