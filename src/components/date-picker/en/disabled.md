### Disabled And Hidden

Disable is to set a clickable element to be unclickable. Hidden is not display in the option.

<!--start-code-->

```js
const DatePickerInstance = props => (
  <div className="field">
    <h5> Disable Picker</h5>
    <DatePicker disabled />

    <h5> Disable Date</h5>
    <DatePicker disabledDate={date => isBefore(date, new Date())} />

    <h5> Disable Month</h5>
    <DatePicker
      disabledDate={date => isBefore(date, new Date())}
      format="YYYY-MM"
    />

    <h5> Disable Time</h5>
    <DatePicker
      format="HH:mm:ss"
      ranges={[]}
      defaultValue={new Date('2017-12-12 09:15:30')}
      disabledHours={hour => hour < 8 || hour > 18}
      disabledMinutes={minute => minute % 15 !== 0}
      disabledSeconds={second => second % 30 !== 0}
    />

    <h5> Hidden Time</h5>
    <DatePicker
      format="HH:mm:ss"
      ranges={[]}
      defaultValue={new Date('2017-12-12 09:15:30')}
      hideHours={hour => hour < 8 || hour > 18}
      hideMinutes={minute => minute % 15 !== 0}
      hideSeconds={second => second % 30 !== 0}
    />
  </div>
);

ReactDOM.render(<DatePickerInstance />);
```

<!--end-code-->
