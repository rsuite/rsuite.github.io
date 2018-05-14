<!--start-code-->

```js
/**
 * import fakeTreeData from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/components/table/data/tree.js
 */

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeTreeData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Table
          height={400}
          data={data}
          isTree
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          renderTreeToggle={(icon, rowData) => {
            if (rowData.labelName === '手机') {
              return <Icon icon="spinner" spin />;
            }
            return icon;
          }}
        >
          <Column flexGrow={1}>
            <HeaderCell>Label</HeaderCell>
            <Cell dataKey="labelName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Count</HeaderCell>
            <Cell dataKey="count" />
          </Column>
        </Table>
      </div>
    );
  }
}

ReactDOM.render(<TreeTable />);
```

<!--end-code-->

A tree table, primarily to show structured data, requires a `isTree` attribute to be set on the `Table` component, while the `data` is used to define the relational structure through `children`.

```js
const data = [
  {
    labelName: '汽车',
    status: 'ENABLED',
    children: [
      {
        labelName: '梅赛德斯-奔驰',
        status: 'ENABLED',
        count: 460
      }
    ]
  }
];
<Table data={data} isTree />;
```

**Dealing with related properties for a tree table**

* defaultExpandAllRows:boolean :Expand all nodes By default
* expandedRowKeys (controlled) and defaultExpandedRowKeys are used to configure the rows that need to be expanded. Note that the parameters that these two properties receive are an array of Rowkey in the array.。
* rowKey : Give each row of data to a unique key, corresponding to a unique value in the key.
* renderTreeToggle:()=>React.Node : Custom Toggle
* onExpandChange:(expanded:boolean,rowData:object)=>void: To open/close a node's callback function
