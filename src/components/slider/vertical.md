### 垂直滑动
<!-- start-code -->
```js
export const VerticalSlider =  () => {
  const style = {
    height: 400
  };
  return (
    <div className="doc-example">
      <Row>
        <Col md={2}>
          <div style={style}>
            <Slider value={50} vertical />
          </div>
        </Col>
        <Col md={2}>
          <div style={style}>
            <Slider value={50}  vertical progress />
          </div>
        </Col>
        <Col md={2}>
          <div style={style}>
            <Slider value={50} min={0} step={5} max={100} graduated vertical progress/>
          </div>
        </Col>
      </Row>
    </div>
  );
};
ReactDOM.render(<VerticalSlider />)
```
<!-- end-code -->


