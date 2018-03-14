### 只能展开一个面板

<!--start-code-->

```js
const instance = (
  <PanelGroup accordion defaultActiveKey={1} bordered>
    <Panel header="Panel 1" eventKey={1}>
      <Paragraph size="short" />
    </Panel>
    <Panel header="Panel 2" eventKey={2}>
      <Paragraph size="short" />
    </Panel>
    <Panel header="Panel 3" eventKey={3}>
      <Paragraph size="short" />
    </Panel>
  </PanelGroup>
);
ReactDOM.render(instance);
```

<!--end-code-->
