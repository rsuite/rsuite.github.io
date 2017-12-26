### 自定义选项

<!-- start-code -->
```js
class CustomDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
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

  handleChange(values){
    this.setState((preveState) => {
      return {
        selectedValues: values
      };
    });
  }

  handleExpand(activeNode, layer)  {
    if (activeNode.children.length) {
      this.setExpand(activeNode);
    }
  }

  renderTreeIcon(nodeData){
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
          height={400}
          onExpand={this.handleExpand}
          onChange={this.handleChange}
          renderTreeIcon={this.renderTreeIcon}
        />
    );
  }
}
ReactDOM.render(<CustomDemo />);
```
<!-- end-code -->