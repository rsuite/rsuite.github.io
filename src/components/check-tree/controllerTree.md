### 受控组件
<!-- start-code -->
```js
class ControlledTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedValues: ['Dave']
    };
  }

  handleOnChange = (values) => {
    console.log(values);
    this.setState((preveState) => {
      return {
        selectedValues: values
      };
    });
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
          height={300}
          onExpand={(activeNode, layer) => {
            console.log(activeNode, layer);
          }}
          onChange={this.handleOnChange}
        />
    );
  }
}

ReactDOM.render(<ControlledTree />)
```
<!-- end-code -->