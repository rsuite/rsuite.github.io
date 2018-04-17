### Alignment

<!--start-code-->

```js
const instance = (
  <div className="show-grid">
    <Divider>align="top"</Divider>
    <FlexboxGird align="top">
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 1 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 2 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 3 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 4 }}>colspan={6}</div>
      </FlexboxGird.Item>
    </FlexboxGird>

    <Divider>align="middle"</Divider>
    <FlexboxGird align="middle">
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 1 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 2 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 3 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 4 }}>colspan={6}</div>
      </FlexboxGird.Item>
    </FlexboxGird>

    <Divider>align="bottom"</Divider>
    <FlexboxGird align="bottom">
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 1 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 2 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 3 }}>colspan={6}</div>
      </FlexboxGird.Item>
      <FlexboxGird.Item colspan={6}>
        <div style={{ lineHeight: 4 }}>colspan={6}</div>
      </FlexboxGird.Item>
    </FlexboxGird>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
