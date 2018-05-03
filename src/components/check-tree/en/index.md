# CheckTree

* `<CheckTree>` is used to display a tree structure data and supports Checkbox selection.

## Usage

```js
import { CheckTree } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<CheckTree>`

| Property           | Type `(default)`                                                                            | Description                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| value              | Array&lt;DataItemType.value&gt;                                                             | (Controlled) specifies the values of the selected tree node |
| defaultValue       | Array&lt;DataItemType.value&gt;                                                             | (UnControlled) default values of the selected tree node     |
| data               | Array&lt;[DataItemType](#DataItemType)&gt;                                                  | tree data                                                   |
| valueKey           | string `('value')`                                                                          | set value key in data                                       |
| labelKey           | string `('label')`                                                                          | set label key in data                                       |
| childKey           | string `('children')`                                                                       | set childrenKey key in data                                 |
| disabledItemValues | Array&lt;DataItemType.value&gt;                                                             | values of disabled tree node                                |
| defaultExpandAll   | boolean                                                                                     | expand all tree node                                        |
| cascade            | boolean `(true)`                                                                            | whether cascade select                                      |
| onChange           | (values:Array&lt;DataItemType.value&gt;)=>void                                              | callback fired when value change                            |
| onExpand           | (activeNode:DataItemType, layer:number)=>void                                               | callback fired when tree node expand state changed          |
| onSelect           | (activeNode:DataItemType.value, layer:number, values:Array&lt;DataItemType.value&gt;)=>void | callback fired when tree node is selected                   |
| renderTreeNode     | (nodeData:DataItemType)=>React.Node                                                         | custom render tree node                                     |
| renderTreeIcon     | (nodeData:DataItemType)=>React.Node                                                         | custom render the icon in tree node                         |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```

### DataItemType

```ts
Type DataItemType = {
  value: any,
  label: React.Node,
  children?:Array<DataItemType>
}
```

## Related components

* [`<Tree>`](./tree)
* [`<TreePicker>`](./tree-picker)
* [`<CheckTreePicker>`](./check-tree-picker)
