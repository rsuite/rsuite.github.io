### 受控面板组

<!--start-code-->
```js

class ControlledPanelGroup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeKey: '1'
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
        <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
        <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        <Panel header="Panel 3" eventKey="3">Panel 3 content</Panel>
      </PanelGroup>
    );
  }
}

ReactDOM.render(<ControlledPanelGroup />);
```
<!--end-code-->