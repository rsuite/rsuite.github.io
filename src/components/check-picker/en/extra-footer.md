### Extra footer

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/resources/data/users.js
 */

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
                select all
              </Button>
              <Button
                appearance="link"
                onClick={() => {
                  this.setState({
                    value: []
                  });
                }}
              >
                select invert
              </Button>

              <Button
                appearance="primary"
                onClick={() => {
                  this.picker.trigger.hide();
                }}
              >
                close
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
