### 受控

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data });
    }, 2000);

    setTimeout(() => {
      this.setState({ value: '1-1-3' });
    }, 1000);
  }
  handleChange(value) {
    this.setState({
      value
    });
  }
  render() {
    return (
      <Cascader
        value={this.state.value}
        onChange={this.handleChange}
        data={this.state.data}
        style={{ width: 224 }}
      />
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
