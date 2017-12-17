### 默认

<!--start-code-->
```js
const instance = (
  <div>
    <Navbar >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">RSUITE</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Nav.Item active>Item A</Nav.Item>
          <Nav.Item>Item B</Nav.Item>
          <Nav.Item>Item C</Nav.Item>
          <Nav.Item disabled>Item D</Nav.Item>
          <Nav.Dropdown activeKey={0}  >
            <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>
            <Nav.Item eventKey={0} >Item E-2</Nav.Item>
            <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>
            <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>
          </Nav.Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item >Link Right</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">RSUITE</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Nav.Item active>Item A</Nav.Item>
          <Nav.Item>Item B</Nav.Item>
          <Nav.Item>Item C</Nav.Item>
          <Nav.Item disabled>Item D</Nav.Item>
          <Nav.Dropdown activeKey={0} >
            <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>
            <Nav.Item eventKey={0} >Item E-2</Nav.Item>
            <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>
            <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>
          </Nav.Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Link Right</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
