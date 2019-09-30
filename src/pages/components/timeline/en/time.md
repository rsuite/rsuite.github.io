### Custom time

<!--start-code-->

```js
const instance = (
  <Timeline>
    <Timeline.Item time="2018-03-01 16:27:41">
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

ReactDOM.render(instance);
```

<!--end-code-->
