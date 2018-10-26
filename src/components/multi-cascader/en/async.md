### Async

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

function asynGetData(node, callback) {
  const findNode = findNodeOfTree(data, item => node.value === item.value);
  const children = get(findNode, 'children');
  const nextData = children.map(item => {
    if (item.children) {
      return {
        ...item,
        children: []
      };
    }
    return item;
  });

  setTimeout(() => {
    callback && callback(nextData);
  }, 1000);
}

class AsynExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.map(item => ({ ...item, children: [] }))
    };
  }

  render() {
    return (
      <div className="example-item">
        <MultiCascader
          data={this.state.data}
          placeholder="Select"
          style={{ width: 224 }}
          renderMenu={(children, menu, parentNode) => {
            if (children.length === 0) {
              return (
                <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
                  <Icon icon="spinner" spin /> Loading...
                </p>
              );
            }
            return menu;
          }}
          onSelect={node => {
            if (node.children && node.children.length === 0) {
              asynGetData(node, children => {
                const nextData = cloneDeep(this.state.data);
                const selectedNode = findNodeOfTree(
                  nextData,
                  item => node.value === item.value
                );
                selectedNode.children = children;
                this.setState({
                  data: nextData
                });
              });
            }
          }}
          onChange={(value, event) => {
            console.log(value, 'onChange');
            this.setState({
              value
            });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<AsynExample />);
```

<!--end-code-->
