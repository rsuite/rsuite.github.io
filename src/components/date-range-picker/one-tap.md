### 单击模式

<!--start-code-->

```js
const instance = (
  <div className="field">
    <h5>选择单日</h5>
    <DateRangePicker
      oneTap
      ranges={[
        {
          label: 'today',
          value: [new Date(), new Date()]
        },
        {
          label: 'yesterday',
          value: [dateFns.addDays(new Date(), 1), dateFns.addDays(new Date(), 1)]
        }
      ]}
    />
    <h5>选择单周</h5>
    <DateRangePicker oneTap hoverRange="week" ranges={[]} />
    <h5>选择单月</h5>
    <DateRangePicker oneTap hoverRange="month" ranges={[]} />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
