### Date + Time

<!--start-code-->

```js
const instance = (
  <DatePicker
    format="YYYY-MM-DD HH:mm:ss"
    ranges={[
      {
        label: 'Now',
        value: moment()
      }
    ]}
  />
);

ReactDOM.render(instance);
```

<!--end-code-->
