### 选择整周、整月


<!--start-code-->
```js
const DateRangePickerHoverRange = props => (
  <div className="field">
    <p>-选择整周</p>
    <DateRangePicker hoverRange="week" />
    <p>-选择整周，ISO 8601 标准， 每个日历星期从星期一开始，星期日为第7天</p>
    <DateRangePicker hoverRange="week" isoWeek />
    <p>-选择整月</p>
    <DateRangePicker hoverRange="month" />
    <p>-自定义选择</p>
    <DateRangePicker
      hoverRange={date => [date.clone().subtract(1, 'days'), date.clone().add(1, 'days')]}
    />
  </div>
);

ReactDOM.render(<DateRangePickerHoverRange />);
```
<!--end-code-->
