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
| appearance           | enum: 'default', 'subtle' `('default')`                                    | Set picker appearence                                       |
| block                | boolean                                                                    | Blocking an entire row                                      |
| cascade              | boolean                                                                    | whether cascade select                                      |
| childKey             | string `('children')`                                                      | set children key in data                                    |
| cleanable            | boolean `(true)`                                                           | whether the selected value can be cleared                   |
| container            | HTMLElement or (() => HTMLElement)                                         | Sets the rendering container                                |
| countable            | boolean `(true)`                                                           | whether display counts of checkItems                        |
| data \*              | Array&lt;Object&gt;                                                        | tree data                                                   |
| defaultExpandAll     | boolean                                                                    | expand all tree node                                        |
| defaultValue         | Array&lt;any&gt;                                                           | (UnControlled) default values of the selected tree node     |
| disabled             | boolean                                                                    | whether disabled                                            |
| disabledItemValues   | Array&lt;any&gt;                                                           | values of disabled tree node                                |
| expandAll            | boolean                                                                    | Expand or unExpand all nodes(Controlled)                    |
| labelKey             | string `('label')`                                                         | set label key in data                                       |
| menuClassName        | string                                                                     | className for Menu                                          |
| menuStyle            | object                                                                     | style for Menu                                              |
| onChange             | (values:Array&lt;any&gt;)=>boolean                                         | callback fired when value change                            |
| onClose              | ()=>void                                                                   | callback fired when close component                         |
| onExpand             | (activeNode:Object, layer:number)=>boolean                                 | callback fired when tree node expand state changed          |
| onOpen               | ()=>void                                                                   | callback fired when open component                          |
| onSearch             | (searchKeyword:string, event)=>boolean                                     | callback fired when search                                  |
| onSelect             | (activeNode::Object, ˝layer:number, values:Array&lt;any&gt;)=>boolean      | callback fired when tree node is selected                   |
| placeholder          | React.Node `('Select')`                                                    |                                                             |
| placement            | enum: Placement `('bottomLeft')`                                           | Placement of component                                      |
| renderExtraFooter    | ()=>React.Node                                                             | custom render extra footer                                  |
| renderMenu           | (menu:React.Node)=>React.Node                                              | Customizing the Rendering Menu list                         |
| renderTreeIcon       | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | custom render the icon of tree node                         |
| renderTreeNode       | (nodeData:Array&lt;Object&gt;)=>React.Node                                 | custom render tree node                                     |
| renderValue          | (values:Array&lt;Object&gt;, checkedItems:Array&lt;Object&gt;)=>React.Node | custom render placeholder                                   |
| seasrchable          | boolean `(true)`                                                           | whether display search input box                            |
| toggleComponentClass | React.ElementType `('a')`                                                  | You can use a custom element for this component             |
| value                | Array&lt;any&gt;                                                           | (Controlled) specifies the values of the selected tree node |
| valueKey             | string `('value')`                                                         | set value key in data                                       |

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
