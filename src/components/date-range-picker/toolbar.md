### 自定义快捷项
<!--start-code-->
```js

const DateRangePickerCustomToolbar = props => (
  <div className="field">
    <DateRangePicker
      ranges={[{
        label: '昨天',
        value: [moment().add(-1, 'd'), moment().add(-1, 'd')]
      }, {
        label: '今天',
        value: [moment(), moment()]
      }, {
        label: '明天',
        value: [moment().add(1, 'd'), moment().add(1, 'd')]
      }, {
        label: '最近 7 天',
        value: [moment().subtract(6, 'days'), moment()]
      }]}
    />
  </div>
);

ReactDOM.render(<DateRangePickerCustomToolbar />);
```
<!--end-code-->

