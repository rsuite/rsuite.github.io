# Table

A table displays rows of data.

* `<Table>` Table component
* `<Table.Column>` Table definition column component
* `<Table.HeaderCell>` Column Header cell component
* `<Table.Cell>` Cell component
* `<Table.Pagination>` Table paging component

## Usage

```js
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;
```

## Examples

<!--{demo}-->

## Props

### `<Table>`

| Property               | Type `(Default)`                        | Description                                                                                   |
| ---------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| bordered               | boolean                                 | Show border lines                                                                             |
| data \*                | Array&lt;Object&gt;                     | Table data                                                                                    |
| width                  | number                                  | Table width                                                                                   |
| height                 | number`(200)`                           | Table height                                                                                  |
| autoHeight             | boolean                                 | Automatic height                                                                              |
| minHeight              | number `(0)`                            | Minimum height                                                                                |
| setRowHeight           | (rowData:object)=> number               | Custom Settings Row Height                                                                    |
| rowHeight              | number`(46)`                            | Row height                                                                                    |
| rowKey                 | string `('key')`                        | Each row corresponds to the unique `key` in `data`                                            |
| rowExpandedHeight      | number `(100)`                          | Set the height of an expandable area                                                          |
| headerHeight           | number`(40)`                            | Table Header Height                                                                           |
| isTree                 | boolean                                 | Show as Tree table                                                                            |
| defaultExpandAllRows   | boolean                                 | Expand all nodes By default                                                                   |
| defaultExpandedRowKeys | Array&lt;string&gt;                     | Specify the default expanded row by `rowkey`                                                  |
| expandedRowKeys        | Array&lt;string&gt;                     | Specify the default expanded row by `rowkey` (Controlled)                                     |
| renderTreeToggle       | (icon:node,rowData:object)=> node       | Tree table, the callback function in the expanded node                                        |
| renderRowExpanded      | (rowDate?: Object) => React.Node        | Customize what you can do to expand a zone                                                    |
| loading                | boolean                                 | Show loading                                                                                  |
| sortColumn             | string                                  | Sort Column Name                                                                              |
| sortType               | enum: 'desc', 'asc'                     | Sort Type                                                                                     |
| showHeader             | boolean `(true)`                        | Display header                                                                                |
| onExpandChange         | (expanded:boolean,rowData:object)=>void | Tree table, the callback function in the expanded node                                        |
| onRowClick             | (rowData:object)=>void                  | Click the callback function after the row and return to `rowDate`                             |
| onSortColumn           | (dataKey:string, sortType:string)=>void | Click the callback function of the sort sequence to return the value `sortColumn`, `sortType` |
| onScroll               | (scrollX:object, scrollY:object)=>void  | Callback function for scroll bar scrolling                                                    |

### `<Table.Column>`

| Property  | Type `(Default)`              | Description                                                                                                 |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| align     | enum: 'left','center','right' | Alignment                                                                                                   |
| width     | number                        | Column width                                                                                                |
| fixed     | boolean                       | Fixed column                                                                                                |
| resizable | boolean                       | Customizable Resize Column width                                                                            |
| sortable  | boolean                       | Sortable                                                                                                    |
| flexGrow  | number                        | Set the column width automatically adjusts, when set `flexGrow` cannot set `resizable` and `width` property |
| minWidth  | number`(200)`                 | When you use `flexGrow`, you can set a minimum width by `minwidth`                                          |
| colSpan   | number                        | Merges column cells to merge when the `dataKey` value for the merged column is `null` or `undefined`.       |




> `sortable` is used to define whether the column is sortable, but depending on what `key` sort needs to set a `dataKey` in `Cell`.
> The sort here is the service-side sort, so you need to handle the logic in the ' Onsortcolumn ' callback function of `<Table>`, and the callback function returns `sortColumn`, `sortType` values.


### `<Table.Cell>`

| Property | Type `(Default)` | Description                                  |
| -------- | ---------------- | -------------------------------------------- |
| dataKey  | string           | Data binding `key`, but also a sort of `key` |
| rowData  | object           | Row data                                     |
| rowIndex | number           | Row number                                   |

### `<Table.Pagination>`

| Property       | Type `(Default)`        | Description                                                                            |
| -------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| lengthMenu     | Array&lt;number&gt;     | Paging display row number configuration, defaults to 30, 50, 100                       |
| showLengthMenu | boolean `(true)`        | Display Dropdown menu                                                                  |
| showInfo       | boolean `(true)`        | Show paging information                                                                |
| total          | number                  | Total number of data entries                                                           |
| displayLength  | number `(30)`           | Configure how many lines of entries per page to display, corresponding to `lengthMenu` |
| onChangePage   | (eventKey:number)=>void | callback function triggered when page changes                                          |
| onChangeLength | (eventKey:number)=>void | The callback function that triggers when the `lengthmenu` value changes                |
| prev           | boolean `(true)`        | Show Previous Page button                                                              |
| next           | boolean `(true)`        | Show Next Page button                                                                  |
| first          | boolean `(true)`        | Show first page button                                                                 |
| last           | boolean `(true)`        | Show last Page button                                                                  |
| maxButtons     | number `(5)`            | Configure the maximum number of display buttons                                        |
| activePage     | number `(1)`            | Configure the current page number                                                      |
