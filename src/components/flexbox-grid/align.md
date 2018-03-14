### 对齐排列

<!--start-code-->

```js
const instance = (
  <div>
    <FlexboxGird align="top">
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 40 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 60 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 80 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 100 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>
    <Divider />

    <FlexboxGird align="middle">
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 40 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 60 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 80 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 100 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
    <FlexboxGird align="bottom">
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 40 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 60 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 80 }}>colspan={4}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={4}>
        <div style={{ heigt: 100 }}>colspan={4}</div>
      </FlexboxGird.Item>
    </FlexboxGird>
    <Divider />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
