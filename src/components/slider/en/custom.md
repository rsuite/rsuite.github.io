### Custom

<!-- start-code -->

```js
class CustomSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    const labels = ['无', '精准', '相似', '模糊'];
    const { value } = this.state;
    const handleStyle = {
      color: '#fff',
      fontSize: 12,
      width: 32,
      height: 22
    };

    return (
      <div className="doc-example">
        人群扩展:
        <div style={{ width: 200, marginLeft: 20 }}>
          <Slider
            id="customSlider"
            min={0}
            max={labels.length - 1}
            value={value}
            className="custom-slider"
            handleStyle={handleStyle}
            graduated
            tooltip={false}
            handleTitle={labels[value]}
            onChange={v => {
              this.setState({ value: v });
            }}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<CustomSlider />);
```

<!-- end-code -->
