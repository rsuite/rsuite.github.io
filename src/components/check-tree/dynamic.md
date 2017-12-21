### 异步加载数据
<!-- start-code -->
```js
const newTreeData = [{
  value: 'children1',
  label: 'children1'
}];
class Dynamic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedValues: ['Dave']
    };
  }

  componentDidMount() {
  }

  setTreeData = (child, activeNode, layer, treeNodes) => {
    if (layer < 0) {
      return;
    }

    const loop = (nodes) => {
      nodes.forEach((node) => {
        if (node.value === activeNode.value && activeNode.expand) {
          node.children = [...node.children, ...child];
        }
        if (node.children) {
          loop(node.children);
        }
      });
    };

    loop(treeNodes);

    this.setState({
      data: treeNodes
    });
  }

  setLoading(activeNode, loading = true) {
    const { data } = this.state;
    const nextTreeData = cloneDeep(data);
    const loop = (nodes) => {
      nodes.forEach((node) => {
        if (node.value === activeNode.value) {
          node.loading = loading;
        }
        if (node.children) {
          loop(node.children);
        }
      });
    };

    loop(nextTreeData);
    this.setState({
      data: nextTreeData
    });
  }

  loadData = (activeNode, layer) => {
    const { data } = this.state;
    const nextTreeData = cloneDeep(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setTreeData(newTreeData, activeNode, layer, nextTreeData);
        resolve();
      }, 2000);
    });
  }


  handleOnChange = (values) => {
    console.log(values);
    this.setState({
      selectedValues: values
    });
  }

  handleOnExpand = (activeNode, layer) => {
    console.log(activeNode);
    if (activeNode.children.length === 0) {
      activeNode.expand && this.setLoading(activeNode, true);
      this.loadData(activeNode, layer)
        .then(() => {
          this.setLoading(activeNode, false);
        });
    }
  }
  renderTreeNode = (nodeData) => {
    if (nodeData.loading) {
      return (
        <span>
          <i className="icon-spinner icon icon-spin" />
          {nodeData.label}
        </span>
      );
    }
    return nodeData.label;
  }

  render() {
    const { data, selectedValues } = this.state;

    return (
      <div className="doc-example">
        <CheckTree
          defaultExpandAll
          cascade={false}
          data={data}
          value={selectedValues}
          disabledItems={['disabled']}
          height={400}
          onExpand={this.handleOnExpand}
          onChange={this.handleOnChange}
          renderTreeNode={this.renderTreeNode}
        />
      </div>
    );
  }
}
ReactDOM.render(<Dynamic />)
```
<!-- end-code -->
>注意：在使用动态加载数据时，应当注意对 data 进行 深拷贝后再出入到 check-tree 组件中。如示例当中的，使用 _.cloneDeep() 对原始 data 进行深拷贝后再进行操作