# CheckTree [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/check-tree/index.md)


- `<CheckTree>` 带 Checkbox 的树形组件


## 获取组件


```js
import { CheckTree } from 'rsuite';
```


## 演示

<!--{demo}-->


## API

### `<CheckTree>`

| 属性名称             | 类型                                                    | 默认值        | 描述                          |
|------------------|-------------------------------------------------------|------------|-----------------------------|
| value            | array                                                 |            | 当前选中的值                      |
| defaultValue     | array                                                 |            | 默认选中的值                      |
| data             | array                                                 |            | tree 数据                     |
| valueKey         | string                                                | 'value'    | tree数据结构value属性名称           |
| labelKey         | string                                                | 'label'    | tree数据结构label属性名称           |
| childKey         | string                                                | 'children' | tree数据结构children属性名称        |
| disabledItems    | Array                                                 |            | 禁用节点列表                      |
| defaultExpandAll | boolean                                               | false      | 默认展开所有节点                    |
| cascade          | boolean                                               | true       | 是否级联选择                      |
| onChange         | (values:Array)=>void                                  |            | 数据改变的回调函数                   |
| onExpand         | (activeNode:Object, layer:number)=>void               |            | 树节点展示时的回调                   |
| onSelect         | (activeNode:Object, layer:number, values:Array)=>void |            | 选择树节点后的回调函数                 |
| renderTreeNode   | (nodeData:Object)=>React.Node                         |            | 自定义渲染 tree 节点               |
| renderTreeIcon   | (nodeData:Object)=>React.Node                         |            | 自定义渲染 图标                    |
| didMount         | (values:Array)=>void                                  |            | componentDidMount 周期完成时回调函数 |

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