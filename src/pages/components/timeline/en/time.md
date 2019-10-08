### Custom time

<!--start-code-->

```js
const TimelineWithTime = ({ align }) => (
  <Timeline align={align}>
    <Timeline.Item time="2018-03-01 16:27:42">
      Your order starts processing
    </Timeline.Item>
    <Timeline.Item time="2018-03-01 16:28:43">
      Your order to be ready for delivery
    </Timeline.Item>
    <Timeline.Item time="2018-03-01 16:28:45">
      Your parcel has been out of the library
    </Timeline.Item>
    <Timeline.Item time="2018-03-02 02:34:41">
      Send to Shanghai Hongkou Company
    </Timeline.Item>
    <Timeline.Item time="2018-03-02 15:05:29">
      Sending you a piece
    </Timeline.Item>
  </Timeline>
);

const instance = (
  <Grid fluid>
    <Row>
      <Col xs={8}>
        <TimelineWithTime align="left" />
      </Col>
      <Col xs={8}>
        <TimelineWithTime align="alternate" />
      </Col>
      <Col xs={8}>
        <TimelineWithTime align="right" />
      </Col>
    </Row>
  </Grid>
);

ReactDOM.render(instance);
```

<!--end-code-->
