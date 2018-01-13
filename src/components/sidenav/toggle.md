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
      <Sidenav expanded={expanded}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item active>Item A</Nav.Item>
            <Nav.Item>Item B</Nav.Item>
            <Nav.Item>Item C</Nav.Item>
            <Nav.Item disabled>Item D</Nav.Item>
            <Dropdown title="Item E">
              <Dropdown.Item>Item E-1</Dropdown.Item>
              <Dropdown.Item>Item E-2</Dropdown.Item>
              <Dropdown.Item>Item E-3</Dropdown.Item>
              <Dropdown.Item>Item E-4</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={this.handleToggle} />
      </Sidenav>
    )
  }
}

ReactDOM.render(<Demo />);
```
<!--end-code-->
