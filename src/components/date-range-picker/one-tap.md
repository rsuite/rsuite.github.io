### 单击模式
<!--start-code-->
```js

const DateRangePickerOneTap = props => (
  <div className="field">
    <p>-选择单日</p>
    <DateRangePicker
      oneTap
    />
    <p>-选择单周</p>
    <DateRangePicker
      hoverRange="week"
      oneTap
    />
    <p>-选择单月</p>
    <DateRangePicker
       hoverRange="month"
       oneTap
    />
  </div>
);

ReactDOM.render(<DateRangePickerOneTap />);
```
<!--end-code-->

