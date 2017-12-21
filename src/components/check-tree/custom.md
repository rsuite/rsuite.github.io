### 自定义图标
<!-- start-code -->
```js
class Custom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedValues: ['Dave']
    };
  }

  setExpand(activeNode) {
    const { data } = this.state;
    const nextTreeData = cloneDeep(data);
    const loop = (nodes) => {
      nodes.forEach((node) => {
        if (node.value === activeNode.value) {
          node.expand = activeNode.expand;
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

  handleOnChange = (values) => {
    this.setState((preveState) => {
      return {
        selectedValues: values
      };
    });
  }

  handleOnExpand = (activeNode, layer) => {
    if (activeNode.children.length) {
      this.setExpand(activeNode);
    }
  }

  renderTreeIcon = (nodeData) => {
    if (nodeData.expand) {
      return (
        <i className="icon-minus-square-o icon " />
      );
    }
    return (
      <i className="icon-plus-square-o icon " />
    );
  }

  render() {
    const { data, selectedValues } = this.state;

    return (
        <CheckTree
          defaultExpandAll
          cascade={false}
          data={data}
          value={selectedValues}
          disabledItems={['disabled']}
          height={400}
          onExpand={this.handleOnExpand}
          onChange={this.handleOnChange}
          renderTreeIcon={this.renderTreeIcon}
        />
    );
  }
}
ReactDOM.render(<Custom />);
```
<!-- end-code -->