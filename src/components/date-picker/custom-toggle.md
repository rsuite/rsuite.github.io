### 和按钮组合

<!--start-code-->

```js
const instance = (
  <div>
    <DatePicker appearance="primary" toggleComponentClass={Button} />
    <hr />
    <DatePicker block toggleComponentClass={Button} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
