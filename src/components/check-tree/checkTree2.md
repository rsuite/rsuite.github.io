### 非关系检查
<!-- start-code -->
```js
class CheckTree2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      value: ['Dave']
    };
  }
  render() {
    const { data, value } = this.state;
    return (
        <CheckTree
          defaultExpandAll
          cascade={false}
          data={data}
          defaultValue={value}
          disabledItems={['disabled']}
          height={300}
          onExpand={(activeNode, layer) => {
            console.log(activeNode, layer);
          }}
        />
    );
  }
}

ReactDOM.render(<CheckTree2 />)

```
<!-- end-code -->