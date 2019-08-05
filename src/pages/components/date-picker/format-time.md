### 只显示时间

<!--start-code-->

```js
const DatePickerInstance = props => (
  <div className="field">
    <h5> 显示时间</h5>
    <DatePicker format="HH:mm:ss" ranges={[]} />
    <h5> 只显示小时与分钟</h5>
    <DatePicker format="HH:mm" ranges={[]} />
  </div>
);

ReactDOM.render(<DatePickerInstance />);
```

<!--end-code-->
