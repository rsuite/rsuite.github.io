### One tap

<!--start-code-->

```js
const instance = (
  <div className="field">
    <h5>Select Single Day</h5>
    <DateRangePicker
      oneTap
      ranges={[
        {
          label: 'today',
          value: [new Date(), new Date()]
        },
        {
          label: 'yesterday',
          value: [dateFns.addDays(1), dateFns.addDays(1)]
        }
      ]}
    />
    <h5>Select Single Week</h5>
    <DateRangePicker oneTap hoverRange="week" ranges={[]} />
    <h5>Select Single Month</h5>
    <DateRangePicker oneTap hoverRange="month" ranges={[]} />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
