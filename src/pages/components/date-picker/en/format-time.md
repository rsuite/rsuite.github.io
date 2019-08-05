### Show Time

<!--start-code-->
```js
const DatePickerInstance = props => (
  <div className="field">
    <h5> show time</h5>
    <DatePicker format="HH:mm:ss" ranges={[]} />
    <h5> show hours and minutes</h5>
    <DatePicker format="HH:mm" ranges={[]} />
  </div>
);

ReactDOM.render(<DatePickerInstance />);

```
<!--end-code-->