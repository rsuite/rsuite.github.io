### 单击模式

<!--start-code-->

```js
const instance = (
  <div className="field">
    <p>-选择单日</p>
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
    <p>-选择单周</p>
    <DateRangePicker oneTap hoverRange="week" ranges={[]} />
    <p>-选择单月</p>
    <DateRangePicker oneTap hoverRange="month" ranges={[]} />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
