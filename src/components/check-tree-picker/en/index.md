# CheckTreePicker

CheckTreePicker are supported in multiple selectors for multiple selection of complex data structures.

- `<CheckTreePicker>` The selector component supports Checkbox on the TreePicker node for multiple selection.

## Usage

```js
import { CheckTreePicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### <CheckTreePicker>

| Property             | Type `(Default)`                                                           | Description                                                 |
| -------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------- |
| value                | Array&lt;any&gt;                                                           | (Controlled) specifies the values of the selected tree node |
| defaultValue         | Array&lt;any&gt;                                                           | (UnControlled) default values of the selected tree node     |
| data \*              | Array&lt;Object&gt;                                                        | tree data                                                   |
| valueKey             | string `('value')`                                                         | set value key in data                                       |
| labelKey             | string `('label')`                                                         | set label key in data                                       |
| childKey             | string `('children')`                                                      | set children key in data                                    |
| disabledItemValues   | Array&lt;any&gt;                                                           | values of disabled tree node                                |
| defaultExpandAll     | boolean                                                                    | expand all tree node                                        |
| expandAll            | boolean                                                                    | Expand or unExpand all nodes(Controlled)                    |
| cascade              | boolean                                                                    | whether cascade select                                      |
| placeholder          | React.Node `('Select')`                                                    |                                                             |
| disabled             | boolean                                                                    | whether disabled                                            |
| cleanable            | boolean `(true)`                                                           | whether the selected value can be cleared                   |
| seasrchable          | boolean `(true)`                                                           | whether dispaly search input box                            |
| onChange             | (values:Array&lt;any&gt;)=>boolean                                         | callback fired when value change                            |
| onExpand             | (activeNode:Object, layer:number)=>boolean                                 | callback fired when tree node expand state changed          |
| onSelect             | (activeNode::Object, layer:number, values:Array&lt;any&gt;)=>boolean       | callback fired when tree node is selected                   |
| onSearch             | (searchKeyword:string, event)=>boolean                                     | callback fired when search                                  |
| onOpen               | ()=>boolean                                                                | callback fired when open component                          |
| onClose              | ()=>boolean                                                                | callback fired when close component                         |
| renderTreeNode       | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | custom render tree node                                     |
| renderTreeIcon       | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | custom render the icon of tree node                         |
| renderValue          | (values:Array&lt;Object&gt;, checkedItems:Array&lt;Object&gt;)=>React.Node | custom render placeholder                                   |
| renderExtraFooter    | ()=>React.Node                                                             | custom render extra footer                                  |
| placement            | enum: Placement `('bottomLeft')`                                           | Placement of component                                      |
| container            | HTMLElement or (() => HTMLElement)                                         | Sets the rendering container                                |
| toggleComponentClass | React.ElementType `('a')`                                                  | You can use a custom element for this component             |

## Types

### Placement

```js
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

## Related Components

- [`<CheckTree>`](./check-tree)
- [`<Tree>`](./tree)
- [`<TreePicker>`](./tree-picker)
