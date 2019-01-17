### Custom Shortcut Options

<!--start-code-->

```js
const DateRangePickerCustomToolbar = props => (
  <div className="field">
    <DateRangePicker
      ranges={[
        {
          label: 'Yesterday',
          value: [addDays(new Date(), -1), addDays(new Date(), -1)]
        },
        {
          label: 'Today',
          value: [new Date(), new Date()]
        },
        {
          label: 'Tomorrow',
          value: [addDays(new Date(), 1), addDays(new Date(), 1)]
        },
        {
          label: 'Last 7 days',
          value: [subDays(new Date(), 6), new Date()]
        }
      ]}
    />
  </div>
);

ReactDOM.render(<DateRangePickerCustomToolbar />);
```

<!--end-code-->
