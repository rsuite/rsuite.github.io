### Custom Shortcut Options
<!--start-code-->
```js

const DateRangePickerCustomToolbar = props => (
  <div className="field">
    <DateRangePicker
      ranges={[{
        label: 'Yesterday',
        value: [moment().add(-1, 'd'), moment().add(-1, 'd')]
      }, {
        label: 'Today',
        value: [moment(), moment()]
      }, {
        label: 'Tomorrow',
        value: [moment().add(1, 'd'), moment().add(1, 'd')]
      }, {
        label: 'Last 7 days',
        value: [moment().subtract(6, 'days'), moment()]
      }]}
    />
  </div>
);

ReactDOM.render(<DateRangePickerCustomToolbar />);
```
<!--end-code-->

