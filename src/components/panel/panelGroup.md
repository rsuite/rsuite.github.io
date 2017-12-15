### 面板组

<!--start-code-->
```js
const panelGroupInstance = (
  <PanelGroup defaultActiveKey="2" accordion>
    <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
    <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
    <Panel header={<div><a>Panel 3</a></div>} eventKey="3">Panel 3 content</Panel>
  </PanelGroup>
);

ReactDOM.render(panelGroupInstance);
```
<!--end-code-->