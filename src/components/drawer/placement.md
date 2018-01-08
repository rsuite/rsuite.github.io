### 显示位置
<!--start-code-->
```js

class DrawersBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true
    });
  }
  render() {
    return (
      <div>

        <ButtonToolbar>
          <IconButton icon="angle-left" onClick={()=>this.toggleDrawer('left')}>Open Left</IconButton>
          <IconButton icon="angle-right" onClick={()=>this.toggleDrawer('right')}>Open Right</IconButton>
          <IconButton icon="angle-up" onClick={()=>this.toggleDrawer('top')}>Open Top</IconButton>
          <IconButton icon="angle-down" onClick={()=>this.toggleDrawer('bottom')}>Open Bottom</IconButton>
        </ButtonToolbar>

        <Drawer
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Paragraph />
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={this.close} appearance="primary">Confirm</Button>
            <Button onClick={this.close} appearance="subtle">Cancel</Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }

}

ReactDOM.render(<DrawersBasic />);
```
<!--end-code-->