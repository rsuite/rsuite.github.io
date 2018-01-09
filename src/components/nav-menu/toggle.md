### 缩起/展开菜单

<!--start-code-->
```js
class Demo extends React.Component{
  constructor(){
    super();
    this.state={
      expanded:true,
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
      <NavMenu expanded={expanded}>
        <NavMenu.Collapse>
          <Nav>
            <Nav.Item active>Item A</Nav.Item>
            <Nav.Item>Item B</Nav.Item>
            <Nav.Item>Item C</Nav.Item>
            <Nav.Item disabled>Item D</Nav.Item>
            <Nav.Dropdown title="Item E">
              <Nav.Item>Item E-1</Nav.Item>
              <Nav.Item>Item E-2</Nav.Item>
              <Nav.Item>Item E-3</Nav.Item>
              <Nav.Item>Item E-4</Nav.Item>
            </Nav.Dropdown>
          </Nav>
        </NavMenu.Collapse>
        <NavMenu.Toggle onToggle={this.handleToggle} />
      </NavMenu>
    )
  }
}

ReactDOM.render(<Demo />);
```
<!--end-code-->
