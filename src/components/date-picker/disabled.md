### 禁用与隐藏

<!--start-code-->
```js
const DatePickerInstance = props => (
  <div className="field">

    <p>- 禁用组件</p>
    <DatePicker disabled />

    <p>- 禁用日期</p>
    <DatePicker
      disabledDate={(date) => date.isAfter(moment())}
    />

    <p>- 禁用时间</p>
    <DatePicker
      format="HH:mm:ss"
      ranges={[]}
      defaultValue={moment('2017-12-12 09:15:30')}
      disabledHours={hour => hour < 8 || hour > 18}
      disabledMinutes={minute => minute % 15 !== 0}
      disabledSeconds={second => second % 30 !== 0}
    />

    <p>- 隐藏时间</p>
    <DatePicker
      format="HH:mm:ss"
      ranges={[]}
      defaultValue={moment('2017-12-12 09:15:30')}
      hideHours={hour => hour < 8 || hour > 18}
      hideMinutes={minute => minute % 15 !== 0}
      hideSeconds={second => second % 30 !== 0}
    />
  </div>
);


ReactDOM.render(<DatePickerInstance />);
```
<!--end-code-->
