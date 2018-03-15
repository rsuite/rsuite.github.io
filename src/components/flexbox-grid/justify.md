### 布局

<!--start-code-->

```js
const instance = (
  <div className="show-grid">
    <FlexboxGird justify="start">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
    <FlexboxGird justify="center">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
    <FlexboxGird justify="end">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
    <FlexboxGird justify="space-between">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
    <FlexboxGird justify="space-around">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
