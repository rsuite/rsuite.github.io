### Asynchronous

<!--start-code-->

```js
class AsynExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      values: []
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setTreeData = this.setTreeData.bind(this);
    this.loadData = this.loadData.bind(this);
    this.handleOnExpand = this.handleOnExpand.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setTreeData(treeNodes, activeNode, children, layer) {
    if (layer < 0) {
      return;
    }

    const loop = nodes => {
      nodes.forEach(node => {
        if (node.value === activeNode.value && activeNode.expand) {
          node.children = [...node.children, ...children];
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
    const nextTreeData = JSON.parse(JSON.stringify(data));
    const loop = nodes => {
      nodes.forEach(node => {
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

  loadData(activeNode, layer) {
    const { data } = this.state;
    const nextTreeData = JSON.parse(JSON.stringify(data));
    const children = [
      {
        label: 'Child Node',
        value: `${activeNode.refKey}-0`,
        children: []
      },
      {
        label: 'Child Node',
        value: `${activeNode.refKey}-1`,
        children: []
      }
    ];
    return new Promise(resolve => {
      setTimeout(() => {
        this.setTreeData(nextTreeData, activeNode, children, layer);
        resolve();
      }, 1000);
    });
  }

  handleChange(values) {
    this.setState({
      values
    });
  }

  handleOpen() {
    if (this.state.data.length === 0) {
      setTimeout(() => {
        this.setState({
          data: [
            {
              label: 'Parent Node',
              value: '0',
              children: []
            }
          ]
        });
      }, 1000);
    }
  }

  handleOnExpand(activeNode, layer) {
    if (activeNode.children.length === 0) {
      activeNode.expand && this.setLoading(activeNode, true);
      this.loadData(activeNode, layer).then(() => {
        this.setLoading(activeNode, false);
      });
    }
  }

  renderTreeNode(node) {
    if (node.loading) {
      return (
        <span>
          <Icon icon="spinner" spin />
          {node.label}
        </span>
      );
    }
    return node.label;
  }

  handleOnExpand(activeNode, layer) {
    if (activeNode.children.length === 0) {
      activeNode.expand && this.setLoading(activeNode, true);
      this.loadData(activeNode, layer).then(() => {
        this.setLoading(activeNode, false);
      });
    }
  }

  renderTreeIcon(node, expandIcon) {
    if (node.loading) {
      return <Icon icon="spinner" spin />;
    }
    return null;
  }

  render() {
    const { data, values } = this.state;
    return (
      <CheckTreePicker
        data={data}
        value={values}
        style={{ width: 272 }}
        defaultExpandAll
        onOpen={this.handleOpen}
        onExpand={this.handleOnExpand}
        onChange={this.handleChange}
        renderMenu={menu => {
          if (data.length === 0) {
            return (
              <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
                <Icon icon="spinner" spin /> 加载中...
              </p>
            );
          }
          return menu;
        }}
        renderTreeIcon={this.renderTreeIcon}
      />
    );
  }
}
ReactDOM.render(<AsynExample />);
```

<!--end-code-->
