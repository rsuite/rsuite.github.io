### 缩起/展开菜单

<!--start-code-->
```js
class Demo extends React.Component{
  constructor(){
    super();
    this.state={
      expanded: true,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){

    this.setState({
      expanded:!this.state.expanded
    });
  }
  render(){

    const { expanded } = this.state;

    return (
      <div>
        <Toggle onChange={this.handleToggle} checked={expanded} />
        <hr />
        <Sidenav expanded={expanded} style={{width:260}}>
          <Sidenav.Body>
            <Nav>
              <Nav.Item active icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
              <Nav.Item icon={<Icon icon="group" />}>User Group</Nav.Item>
              <Dropdown title="Advanced" icon={<Icon icon="magic" />}>
                <Dropdown.Item>Geo</Dropdown.Item>
                <Dropdown.Item>Devices</Dropdown.Item>
                <Dropdown.Item>Loyalty</Dropdown.Item>
                <Dropdown.Item>Visit Depth</Dropdown.Item>
              </Dropdown>
              <Dropdown title="Settings" icon={<Icon icon="gears" />}>
                <Dropdown.Item>Applications</Dropdown.Item>
                <Dropdown.Item>Channels</Dropdown.Item>
                <Dropdown.Item>Versions</Dropdown.Item>
                <Dropdown.Menu title="Custom Action">
                  <Dropdown.Item >Action Name</Dropdown.Item>
                  <Dropdown.Item >Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    )
  }
}

ReactDOM.render(<Demo />);
```
<!--end-code-->
