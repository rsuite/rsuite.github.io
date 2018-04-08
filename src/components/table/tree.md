<!--start-code-->

```js

/**
 * import fakeTreeData from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/components/table/data/tree.js
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

树形表格，主要为了展示有结构关系的数据，需要在 `Table` 组件上设置一个 `isTree` 属性，同时 `data` 中的数据需要通过 `children` 来定义关系结构。

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

**处理树形表格用的的相关属性**

* defaultExpandAllRows:boolean 默认展开所有节点
* expandedRowKeys（受控） 和 defaultExpandedRowKeys 用来配置需要展开的行。需要注意的是这两个属性接收的参数是一个的数组，数组中是 rowKey。
* rowKey 给每一行数据对一个唯一 key , 对应 data 中的一个唯一值的 key。
* renderTreeToggle:()=>React.Node 自定义 Toggle
* onExpandChange:(expanded:boolean,rowData:object)=>void 展开/关闭节点的回调函数
