### 自定义时间轴和内容的相对位置

<!--start-code-->

```js
const ModeTimeline = ({ mode }) => (
  <Timeline mode={mode}>
    <Timeline.Item>
      <p>2018-03-01</p>
      <p>您的订单开始处理</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-02</p>
      <p>订单缺货</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-10</p>
      <p>到货</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-12</p>
      <p>订单出库</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-15</p>
      <p>正在为您派件</p>
    </Timeline.Item>
  </Timeline>
);
const instance = (
  <Grid fluid>
    <Row>
      <Col xs={8}>
        <ModeTimeline mode="left" />
      </Col>
      <Col xs={8}>
        <ModeTimeline mode="alternate" />
      </Col>
      <Col xs={8}>
        <ModeTimeline mode="right" />
      </Col>
    </Row>
  </Grid>
);

ReactDOM.render(instance);
```

<!--end-code-->
