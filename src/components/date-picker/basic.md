### 默认

<!--start-code-->

```js
const instance = <DatePicker style={{ width: 280 }} />;

//ReactDOM.render(instance);

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment()
    };
  }
  render() {
    return (
      <DatePicker
        value={this.state.value}
        onChange={value => {
          console.log('onChange');
          this.setState({ value });
        }}
        style={{ width: 280 }}
      />
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
