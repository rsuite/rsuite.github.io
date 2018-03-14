### 折叠面板组

<!--start-code-->

```js
const instance = (
  <PanelGroup accordion>
    <Panel header="Panel 1" defaultExpanded>
      <Paragraph size="short" />
    </Panel>
    <Panel header="Panel 2">
      <Paragraph size="short" />
    </Panel>
    <Panel header="Panel 3">
      <Paragraph size="short" />
    </Panel>
  </PanelGroup>
);
ReactDOM.render(instance);
```

<!--end-code-->
