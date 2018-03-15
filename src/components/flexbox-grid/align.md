### 对齐排列

<!--start-code-->

```js
const instance = (
  <div className="show-grid">
    <Divider />

    <FlexboxGird align="top" justify="space-around">
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 1 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 2 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 3 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 4 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>

    <Divider />

    <FlexboxGird align="middle" justify="space-around">
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 1 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 2 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 3 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 4 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>

    <Divider />

    <FlexboxGird align="bottom" justify="space-around">
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 1 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 2 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 3 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ lineHeight: 4 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
