# Table 表格

以表格的方式展示数据。

* `<Table>` 表格组件
* `<Table.Column>` 表格定义列组件
* `<Table.HeaderCell>` 列头单元格组件
* `<Table.Cell>` 单元格组件
* `<Table.Pagination>` 表格分页组件

## 获取组件

```js
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;
```

## 演示

<!--{demo}-->

## Props

### `<Table>`

| 属性名称               | 类型 `(默认值)`                         | 描述                                                         |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------ |
| bordered               | boolean                                 | 表格边框                                                     |
| cellBordered           | boolean                                 | 单元格边框                                                   |
| data \*                | Array&lt;Object&gt;                     | 表格数据                                                     |
| width                  | number                                  | 宽度                                                         |
| height                 | number`(200)`                           | 高度                                                         |
| autoHeight             | boolean                                 | 自动高度                                                     |
| minHeight              | number `(0)`                            | 最小高度                                                     |
| setRowHeight           | (rowData:object)=> number               | 自定义设置行高                                               |
| rowHeight              | number`(46)`                            | 行高                                                         |
| rowKey                 | string `('key')`                        | 每一个行对应的 `data` 中的唯一 `key`                         |
| rowExpandedHeight      | number `(100)`                          | 设置可展开区域的高度                                         |
| headerHeight           | number`(40)`                            | 表头高度                                                     |
| isTree                 | boolean                                 | 是否展示为树表格                                             |
| defaultExpandAllRows   | boolean                                 | 默认展开所有节点                                             |
| defaultExpandedRowKeys | Array&lt;string&gt;                     | 通过 rowKey 指定默认展开的行                                 |
| expandedRowKeys        | Array&lt;string&gt;                     | 通过 rowKey 指定展开的行 (受控)                              |
| renderTreeToggle       | (icon:node,rowData:object)=> node       | 树形表格，在展开节点的回调函数                               |
| renderRowExpanded      | (rowDate?: Object) => React.Node        | 自定义可以展开区域的内容                                     |
| locale                 | object                                  | 本地化语言配置                                               |
| loading                | boolean                                 | 显示 loading 状态                                            |
| sortColumn             | string                                  | 排序列名称                                                   |
| sortType               | enum: 'desc', 'asc'                     | 排序类型                                                     |
| showHeader             | boolean `(true)`                        | 显示表头                                                     |
| onExpandChange         | (expanded:boolean,rowData:object)=>void | 树形表格，在展开节点的回调函数                               |
| onRowClick             | (rowData:object)=>void                  | 行点击后的回调函数， 返回 `rowDate`                          |
| onSortColumn           | (dataKey:string, sortType:string)=>void | 点击排序列的回调函数，返回 `sortColumn`, `sortType` 这两个值 |
| onScroll               | (scrollX:object, scrollY:object)=>void  | 滚动条滚动时候的回调函数                                     |

### `<Table.Column>`

| 属性名称  | 类型 `(默认值)`               | 描述                                                                                  |
| --------- | ----------------------------- | ------------------------------------------------------------------------------------- |
| align     | enum: 'left','center','right' | 对齐方式                                                                              |
| width     | number                        | 列宽                                                                                  |
| fixed     | boolean                       | 固定列                                                                                |
| resizable | boolean                       | 可自定义调整列宽                                                                      |
| sortable  | boolean                       | 可排序                                                                                |
| flexGrow  | number                        | 设置列宽自动调节，当设置了 `flexGrow` 就不能设置 `resizable` 与 `width` 属性          |
| minWidth  | number`(200)`                 | 当使用了 `flexGrow` 以后，可以通过 `minWidth` 设置一个最小宽度                        |
| colSpan   | number                        | 合并列单元格，当被合并列的 `dataKey` 对应的值为 `null` 或者 `undefined`时，才会合并。 |

> `sortable` 是用来定义该列是否可排序，但是根据什么 `key` 排序需要 在 `Cell` 设置一个 `dataKey`
> 这里的排序是服务端排序，所以需要在 `<Table>` 的 `onSortColumn` 回调函数中处理逻辑，回调函数会返回 `sortColumn`, `sortType` 这两个值。

### `<Table.Cell>`

| 属性名称 | 类型 `(默认值)` | 描述                                    |
| -------- | --------------- | --------------------------------------- |
| dataKey  | string          | 数据绑定的 `key` ，同时也是排序的 `key` |
| rowData  | object          | 行数据                                  |
| rowIndex | number          | 行号                                    |

### `<Table.Pagination>`

| 属性名称         | 类型 `(默认值)`                             | 描述                                        |
| ---------------- | ------------------------------------------- | ------------------------------------------- |
| activePage       | number `(1)`                                | 配置当前页号                                |
| lengthMenu       | Array                                       | 分页显示行数配置，默认为 30, 50, 100        |
| showLengthMenu   | boolean `(true)`                            | 显示多少行的菜单，默认显示                  |
| showInfo         | boolean `(true)`                            | 显示分页信息                                |
| total            | number                                      | 总数据条目数                                |
| displayLength    | number `(30)`                               | 配置每页显示多少行条目数，对应 `lengthMenu` |
| onChangePage     | (eventKey: number)=>void                    | page 改变时候触发的回调函数                 |
| onChangeLength   | (eventKey: number)=>void                    | `lengthMenu` 值发生改变的时候触发的回调函数 |
| prev             | boolean `(true)`                            | 显示上一页按钮                              |
| next             | boolean `(true)`                            | 显示下一页按钮                              |
| first            | boolean `(true)`                            | 显示第一页按钮                              |
| last             | boolean `(true)`                            | 显示最后一页按钮                            |
| maxButtons       | number `(5)`                                | 配置最多显示按钮数量                        |
| renderTotal      | (total: number, activePage: number) => void | 自定义总数                                  |
| renderLengthMenu | (picker: React.Node) => React.Node          | 自定义菜单                                  |
| disabled         | boolean , (eventKey: any) => boolean        | 禁用分页                                    |
