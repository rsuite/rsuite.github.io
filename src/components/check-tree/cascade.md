### 级联选择


设置 `cascade` 属性后，在选择的时候会级联选择子父级节点。

<!-- start-code -->
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cascade: false
    };
  }
  render() {
    const { cascade } = this.state;
    return (
        <div>
          <div>
            打开级联：
            <Toggle
              checked={cascade}
              onChange={(checked)=>{
                this.setState({cascade:checked})
              }}
            />
          </div>
          <CheckTree
            defaultExpandAll
            cascade={cascade}
            data={data}
            height={300}
          />
        </div>
    );
  }
}

ReactDOM.render(<Demo />)
```
<!-- end-code -->