### 左侧导航布局

<!--start-code-->

```js
const headerStyles = {
  padding: 20,
  fontSize: 16,
  height: 62,
  background: '#34c3ff',
  color: ' #fff'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        {expand ? (
          <Nav>
            <Dropdown
              placement="rightTop"
              renderTitle={children => {
                return <Icon icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
        ) : null}

        <Nav pullRight>
          <Nav.Item onClick={onChange}>
            <Icon icon="angle-left" />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar width={expand ? 260 : 50} collapsible>
            <Sidenav.Header>
              <div style={headerStyles} />
            </Sidenav.Header>
            <Sidenav
              expanded={expand}
              defaultOpenKeys={['3', '4']}
              defaultActiveKey="2"
              appearance="subtle"
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                    User Group
                  </Nav.Item>
                  <Dropdown eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
                    <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>
                  <Dropdown eventKey="4" title="Settings" icon={<Icon icon="gears" />}>
                    <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                    <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                    <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>

          <Container>
            <Header>
              <h2>Page Title</h2>
            </Header>
            <Content>Content</Content>
          </Container>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Page />);
```

<!--end-code-->
