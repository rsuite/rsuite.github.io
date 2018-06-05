### Custom Shortcut Options

<!--start-code-->

```js
const instance = (
  <div className="field">
    <DatePicker
      ranges={[
        {
          label: 'yesterday',
          value: moment().add(-1, 'd')
        },
        {
          label: 'today',
          value: moment()
        },
        {
          label: 'Prev Day',
          closeOverlay: false,
          value: datePage => {
            return moment(datePage).add(-1, 'd');
          }
        }
      ]}
    />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->

Clicking "The day before" in the example does not close the picker layer because the `closeOverlay:boolean` property is configured. This propperty is used to set whether to close the picker layer after clicking the shortcut item. The default value is `true`.
