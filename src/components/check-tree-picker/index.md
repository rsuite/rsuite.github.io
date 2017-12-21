# CheckTreePicker [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/check-tree-picker/index.md)


- `<CheckTreePicker>` 带 Checkbox 的树形组件


## 获取组件


```js
import { CheckTreePicker } from 'rsuite';
```


## 演示

<!--{demo}-->


## API

### <CheckTreePicker>

| 属性名称             | 类型                                  | 默认值        | 描述                          |
|------------------|-------------------------------------|------------|-----------------------------|
| value            | array                               |            | 当前选中的值                      |
| defaultValue     | array                               |            | 默认选中的值                      |
| data             | array                               |            | tree 数据                     |
| valueKey         | string                              | "value"    | tree数据结构value属性名称           |
| labelKey         | string                              | "label"    | tree数据结构label属性名称           |
| childKey         | string                              | "children" | tree数据结构children属性名称        |
| disabledItems    | array                               |            | 禁用节点列表                      |
| defaultExpandAll | bool                                | false      | 默认展开所有节点                    |
| cascade          | bool                                | false      | 是否级联选择                      |
| onChange         | function(values)                    |            | 数据改变的回调函数                   |
| onExpand         | function(activeNode, layer)         |            | 树节点展示时的回调                   |
| onSelect         | function(activeNode, layer, values) |            | 选择树节点后的回调函数                 |
| renderTreeNode   | function(nodeData)                  |            | 自定义渲染 tree 节点               |
| renderTreeIcon   | function(nodeData)                  |            | 自定义渲染 图标                    |
| didMount         | function(values)                    |            | componentDidMount 周期完成时回调函数 |
<br>

`data` 的结构是:

```javascript
 [{
      "value":1
      "label":"label-1",
      "children":[{
          "value":2
          "label":"label-2"
      },{
          "value":3
          "label":"label-3"
      }]
 }]
```