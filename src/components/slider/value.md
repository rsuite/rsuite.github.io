### 显示值
<!-- start-code -->
```js
class ValueSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="doc-example">
        <Row>
          <Col md={6}>
            <Slider
              value={value}
              onChange={(value) => {
                this.setState({ value });
              }}
            />
          </Col>
          <Col md={2}>
            <Input value={value} />
          </Col>
        </Row>
      </div>
    );
  }
}
ReactDOM.render(<ValueSlider />)
```
<!-- end-code -->
