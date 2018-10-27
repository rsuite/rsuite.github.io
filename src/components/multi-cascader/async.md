### 异步

<!--start-code-->

```js
function createNode() {
  return {
    label: `Node ${(Math.random() * 1e18)
      .toString(36)
      .slice(0, 3)
      .toUpperCase()}`,
    value: Math.random() * 1e18,
    children: []
  };
}

function createChildren() {
  const children = [];
  for (let i = 0; i < Math.random() * 10; i++) {
    children.push(createNode());
  }
  return children;
}

function getChildrenByNode(node, callback) {
  setTimeout(() => {
    callback(createChildren());
  }, 1000);
}

class AsynExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: createChildren()
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSelect(node) {
    const data = cloneDeep(this.state.data);
    const selectedNode = findNodeOfTree(
      data,
      item => node.value === item.value
    );

    getChildrenByNode(node, children => {
      selectedNode.children = children;
      this.setState({ data });
    });
  }

  handleChange(value, event) {
    this.setState({ value });
  }

  renderMenu(children, menu, parentNode) {
    if (children.length === 0) {
      return (
        <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
          <Icon icon="spinner" spin /> 加载中...
        </p>
      );
    }
    return menu;
  }
  render() {
    return (
      <div className="example-item">
        <MultiCascader
          placeholder="请选择"
          style={{ width: 224 }}
          data={this.state.data}
          renderMenu={this.renderMenu}
          onSelect={this.handleSelect}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<AsynExample />);
```

<!--end-code-->
