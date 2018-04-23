### Layout

<!--start-code-->

```js
const instance = (
  <div className="show-grid">
    <Divider>justify="start"</Divider>
    <FlexboxGird justify="start">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider>justify="center"</Divider>
    <FlexboxGird justify="center">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider>justify="end"</Divider>
    <FlexboxGird justify="end">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider>justify="space-between"</Divider>
    <FlexboxGird justify="space-between">
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>colspan={4}</FlexboxGird.Item>
    </FlexboxGird>
    <Divider>justify="space-around"</Divider>
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
