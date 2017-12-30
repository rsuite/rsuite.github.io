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
          <IconButton icon="angle-left" onClick={()=>this.toggleDrawer('left')}>Open Left</IconButton>
          <IconButton icon="angle-right" onClick={()=>this.toggleDrawer('right')}>Open Right</IconButton>
          <IconButton icon="angle-up" onClick={()=>this.toggleDrawer('top')}>Open Top</IconButton>
          <IconButton icon="angle-down" onClick={()=>this.toggleDrawer('bottom')}>Open Bottom</IconButton>
        </ButtonToolbar>

        <Drawer
          full
          placement={placement}
          show={show}
          onHide={this.handleClose}
        >
          <h4>Drawer.Body</h4>
          <p>Drawer.Body</p>
        </Drawer>
      </div>
    );
  }

}

ReactDOM.render(<DrawersBasic />);
```
<!--end-code-->