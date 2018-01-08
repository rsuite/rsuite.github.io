### 抽屉尺寸
<!--start-code-->
```js

class DrawersBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      size:'lg',
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
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
  handleChangeSize(size){
    this.setState({size})
  }
  render() {

    const { size, placement, show } = this.state;

    return (
      <div>
        <ButtonToolbar>
          <RadioGroup  inline value={size} onChange={this.handleChangeSize}>
            <Radio value="lg">Large</Radio>
            <Radio value="md">Medium</Radio>
            <Radio value="sm">Small</Radio>
            <Radio value="xs">Xsmall</Radio>
          </RadioGroup>
        </ButtonToolbar>
        <ButtonToolbar>
          <IconButton icon="angle-left" onClick={()=>this.toggleDrawer('left')}>Open Left</IconButton>
          <IconButton icon="angle-right" onClick={()=>this.toggleDrawer('right')}>Open Right</IconButton>
          <IconButton icon="angle-up" onClick={()=>this.toggleDrawer('top')}>Open Top</IconButton>
          <IconButton icon="angle-down" onClick={()=>this.toggleDrawer('bottom')}>Open Bottom</IconButton>
        </ButtonToolbar>

        <Drawer
          size={size}
          placement={placement}
          show={show}
          onHide={this.handleClose}
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