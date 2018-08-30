### Disabled

<!--start-code-->

```js
const DateRangePickerDefault = props => (
  <div className="field">
    <p>
      - Disabled Picker: <code>disabled</code>
    </p>
    <DateRangePicker disabled />
    <p>
      - Disabled Date: <code>disabledDate</code>
    </p>
    <DateRangePicker
      defaultValue={[moment(), moment().add(10, 'd')]}
      disabledDate={date => date.isAfter(moment())}
    />
    <p>
      - Disabled Date: control range (can't be bigger than today, and the time
      span can only be selected within 5 days)
    </p>
    <DateRangePicker
      disabledDate={(date, selectValue, selectedDone, target) => {
        // Disabled if larger than today
        if (date.isAfter(moment(), 'd')) {
          return true;
        }

        /**
         * When only one time is selected
         * Judgment of the selected time is disabled for more than 5 days before and after
         */
        if (target === 'CALENDAR' && selectValue && selectValue[0] && !selectedDone && (
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
