# Tree 树型控件 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/tree/index.md)


- `<Tree>`

> 当需要选项中支持 Checkbox，用于多选， 推荐使用 [`<CheckTree>`](./check-tree)


## 获取组件


```js
import { Tree } from 'rsuite';
```



## 演示

<!--{demo}-->


## Props


### `<Tree>`

| 属性名称         | 类型 `(默认值)`                   | 描述                         |
| ---------------- | --------------------------------- | ---------------------------- |
| classPrefix      | string                            | class 前缀                   |
| value            | array                             | 当前选中的值                 |
| defaultValue     | array                             | 默认选中的值                 |
| data             | array                             | tree 数据                    |
| valueKey         | string  `('value')`               | tree数据结构value属性名称    |
| labelKey         | string  `('label')`               | tree数据结构label属性名称    |
| childrenKey      | string  `('children')`            | tree数据结构children属性名称 |
| disabledItems    | array                             | 禁用节点列表                 |
| defaultExpandAll | boolean                           | 默认展开所有节点             |
| onExpand         | (activeNode, layer)=>void         | 树节点展示时的回调           |
| onSelect         | (activeNode, layer, values)=>void | 选择树节点后的回调函数       |
| onChange         | (value)=>void                     | 数据改变的回调函数           |
| renderTreeNode   | (nodeData)=>React.Node            | 自定义渲染 tree 节点         |
| renderTreeIcon   | (nodeData)=>React.Node            | 自定义渲染 图标              |

