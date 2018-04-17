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

| Property           | Type `(default)`                                                     | Description                                                 |
| ------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| value              | Array&lt;any&gt;                                                     | (Controlled) specifies the values of the selected tree node |
| defaultValue       | Array&lt;any&gt;                                                     | (UnControlled) default values of the selected tree node     |
| data               | Array&lt;Object&gt;                                                  | tree data                                                   |
| valueKey           | string `('value')`                                                   | set value key in data                                       |
| labelKey           | string `('label')`                                                   | set label key in data                                       |
| childKey           | string `('children')`                                                | set childrenKey key in data                                 |
| disabledItemValues | Array&lt;any&gt;                                                     | values of disabled tree node                                |
| defaultExpandAll   | boolean                                                              | expand all tree node                                        |
| cascade            | boolean `(true)`                                                     | whether cascade select                                      |
| onChange           | (values:Array&lt;any&gt;)=>boolean                                   | callback fired when value change                            |
| onExpand           | (activeNode:Object, layer:number)=>boolean                           | callback fired when tree node expand state changed          |
| onSelect           | (activeNode::Object, layer:number, values:Array&lt;any&gt;)=>boolean | callback fired when tree node is selected                   |
| renderTreeNode     | (nodeData:Array<Object>)=>React.Node                                 | custom render tree node                                     |
| renderTreeIcon     | (nodeData:Array<Object>)=>React.Node                                 | custom render the icon in tree node                         |

## Types

### Placement

```js
Type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
```

## Related components

* [`<Tree>`](./tree)
* [`<TreePicker>`](./tree-picker)
* [`<CheckTreePicker>`](./check-tree-picker)
