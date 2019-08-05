### Custom

<!--start-code-->

```js
const instance = (
  <Timeline>
    <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
      <p>2018-03-01</p>
      <p>Your order starts processing</p>
    </Timeline.Item>
    <Timeline.Item dot={<Icon icon="exclamation-triangle" style={{ color: 'orange' }} />}>
      <p>2018-03-02</p>
      <p>Order out of stock</p>
    </Timeline.Item>
    <Timeline.Item dot={<Icon icon="info-circle" style={{ color: 'blue' }} />}>
      <p>2018-03-10</p>
      <p>Arrival</p>
    </Timeline.Item>
    <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
      <p>2018-03-12</p>
      <p>Order out of the library</p>
    </Timeline.Item>
    <Timeline.Item dot={<Icon icon="spinner" spin style={{ borderRadius:'50%' }} />}>
      <p>2018-03-15</p>
      <p>Sending you a piece</p>
    </Timeline.Item>
  </Timeline>
);

ReactDOM.render(instance);
```

<!--end-code-->
