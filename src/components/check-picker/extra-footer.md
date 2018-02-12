### 额外的页脚

<!--start-code-->
```js
const footerStyles = {
  padding: 10,
  textAlign: 'right',
  background: '#f5f5f5'
};

class ExtraFooterExample extends React.Component {
  constructor() {
    super();
    this.state = {
      value: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <div className="example-item">
        <CheckPicker
          data={data}
          placeholder="请选择"
          ref={(ref) => {
            this.picker = ref;
          }}
          value={this.state.value}
          onChange={this.handleChange}
          renderExtraFooter={() => (
            <div style={footerStyles}>
              <Button
                appearance="link"
                onClick={() => {
                  this.setState({
                    value: data.map(item => item.value)
                  });
                }}
              >
                全选
              </Button>
              <Button
                appearance="link"
                onClick={() => {
                  this.setState({
                    value: []
                  });
                }}
              >
                反选
              </Button>

              <Button
                appearance="primary"
                onClick={() => {
                  this.picker.trigger.hide();
                }}
              >
                关闭
              </Button>
            </div>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<ExtraFooterExample />);

```
<!--end-code-->
