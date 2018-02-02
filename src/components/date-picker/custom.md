### 自定义快捷项

<!--start-code-->
```js
const DatePickerCustomToolbar = props => (
  <div className="field">
    <DatePicker
      ranges={[{
        label: '昨天',
        closeOverlay: false,
        value: moment().add(-1, 'd')
      }, {
        label: '今天',
        closeOverlay: false,
        value: moment()
      }, {
        label: '前一天',
        closeOverlay: false,
        value: (datePage) => {
          return moment(datePage).add(-1, 'd');
        }
      }]}
    />
  </div>
);

ReactDOM.render(<DatePickerCustomToolbar />);
```
<!--end-code-->
