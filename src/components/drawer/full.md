### 全屏
<!--start-code-->
```js

class DrawersBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  handleClose() {
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

    const { placement, show } = this.state;

    return (
      <div>

        <ButtonToolbar>
          <IconButton
            icon={<Icon icon="angle-left"  />}
            onClick={()=>this.toggleDrawer('left')}
          >
            Left
          </IconButton>
          <IconButton
            icon={<Icon icon="angle-right"  />}
            onClick={()=>this.toggleDrawer('right')}
          >
            Right
          </IconButton>
          <IconButton
            icon={<Icon icon="angle-up"  />}
            onClick={()=>this.toggleDrawer('top')}
          >
            Top
          </IconButton>
          <IconButton
            icon={<Icon icon="angle-down"  />}
            onClick={()=>this.toggleDrawer('bottom')}
          >
            Bottom
          </IconButton>
        </ButtonToolbar>

        <Drawer
          full
          placement={placement}
          show={show}
          onHide={this.handleClose}
        >
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Paragraph count={1} />
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