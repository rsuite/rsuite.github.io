### Order

<!--start-code-->

```js
const instance = (
  <div className="show-grid">
    <FlexboxGird>
      <FlexboxGird.Item colspan={4} order={4}>
        order={4}
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4} order={3}>
        order={3}
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4} order={2}>
        order={2}
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4} order={1}>
        order={1}
      </FlexboxGird.Item>
    </FlexboxGird>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
