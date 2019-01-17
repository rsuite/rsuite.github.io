### Select Whole Week, Whole Month

<!--start-code-->

```js
const instance = (
  <div className="field">
    <h5>Select Whole Week</h5>
    <DateRangePicker hoverRange="week" ranges={[]} />
    <h5>
      -Select Whole Week, ISO 8601 standard, each calendar week begins on Monday
      and Sunday is the seventh day
    </h5>
    <DateRangePicker hoverRange="week" isoWeek ranges={[]} />
    <h5>Select Whole Month</h5>
    <DateRangePicker hoverRange="month" ranges={[]} />
    <h5>Custom Select</h5>
    <DateRangePicker
      ranges={[]}
      hoverRange={date => [subDays(date, 1), addDays(date, 1)]}
    />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
