### Click Mode

<!--start-code-->

```js
const instance = (
  <div className="field">
    <p>-Select Single Day</p>
    <DateRangePicker
      oneTap
      ranges={[
        {
          label: 'today',
          value: [moment(), moment()]
        },
        {
          label: 'yesterday',
          value: [moment().add(1, 'd'), moment().add(1, 'd')]
        }
      ]}
    />
    <p>-Select Single Week</p>
    <DateRangePicker oneTap hoverRange="week" ranges={[]} />
    <p>-Select Single Month</p>
    <DateRangePicker oneTap hoverRange="month" ranges={[]} />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
