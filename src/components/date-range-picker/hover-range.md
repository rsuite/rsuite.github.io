### 选择整周、整月

<!--start-code-->

```js
const instance = (
  <div className="field">
    <h5>选择整周</h5>
    <DateRangePicker hoverRange="week" ranges={[]} />
    <h5>选择整周，ISO 8601 标准， 每个日历星期从星期一开始，星期日为第7天</h5>
    <DateRangePicker hoverRange="week" isoWeek ranges={[]} />
    <h5>选择整月</h5>
    <DateRangePicker hoverRange="month" ranges={[]} />
    <h5>自定义选择</h5>
    <DateRangePicker
      ranges={[]}
      hoverRange={date => [
        date.clone().subtract(1, 'days'),
        date.clone().add(1, 'days')
      ]}
    />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
