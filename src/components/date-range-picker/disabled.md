### 禁用


<!--start-code-->
```js

const DateRangePickerDefault = props => (
  <div className="field">
    <p>- 禁用组件: <code>disabled</code></p>
    <DateRangePicker disabled />
    <p>- 禁用日期: <code>disabledDate</code></p>
    <DateRangePicker
      defaultValue={[moment(), moment().add(10, 'd')]}
      disabledDate={(date) => date.isAfter(moment())}
    />
    <p>- 禁用日期: 控制选择范围 (不能大于今天, 同时时间跨度只能选择 5 天内)</p>
    <DateRangePicker
      disabledDate={(date, selectValue, selectedDone, type) => {

        // 如果大于今天则禁用
        if (date.isAfter(moment(), 'd')) {
          return true;
        }

        /**
         * 当只选择了一个时间时
         * 判断选择的时间前后超过5天的时间都禁用
         */
        if (type === 'CALENDAR' && selectValue && selectValue[0] && !selectedDone && (
          selectValue[0].clone().add(-5, 'd').isAfter(date, 'd') ||
          selectValue[0].clone().add(5, 'd').isBefore(date, 'd')
        )) {
          return true;
        }

        return false;
      }}
    />
  </div>
);

ReactDOM.render(<DateRangePickerDefault />);
```
<!--end-code-->
