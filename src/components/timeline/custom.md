### 自定义

<!--start-code-->

```js
const instance = (
  <div>
    <Timeline>
      <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
        <p>2018-03-01</p>
        <p>您的订单开始处理</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="exclamation-triangle" style={{ color: 'orange' }} />}>
        <p>2018-03-02</p>
        <p>订单缺货</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="info-circle" style={{ color: 'blue' }} />}>
        <p>2018-03-10</p>
        <p>到货</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
        <p>2018-03-12</p>
        <p>订单出库</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="spinner" pulse />}>
        <p>2018-03-15</p>
        <p>正在为您派件</p>
      </Timeline.Item>
    </Timeline>
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
