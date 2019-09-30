### 自定义时间轴时间

<!--start-code-->

```js
const instance = (
  <Timeline timeWidth={140}>
    <Timeline.Item time="2018-03-01 16:27:42">您的订单开始处理</Timeline.Item>
    <Timeline.Item time="2018-03-01 16:28:43">您的订单待配货</Timeline.Item>
    <Timeline.Item time="2018-03-01 16:28:45">您的包裹已出库</Timeline.Item>
    <Timeline.Item time="2018-03-02 02:34:41">发往上海虹口区公司</Timeline.Item>
    <Timeline.Item time="2018-03-02 15:05:29">正在为您派件</Timeline.Item>
  </Timeline>
);

ReactDOM.render(instance);
```

<!--end-code-->
