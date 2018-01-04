### 默认
<!--start-code-->
```js

class Demo extends React.Component{
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
  toggleDrawer() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button onClick={this.toggleDrawer}>Open</Button>
        </ButtonToolbar>
        <Drawer
          show={this.state.show}
          onHide={this.close}
        >
          <h4>Drawer</h4>
          <Paragraph count={10} />
        </Drawer>
      </div>
    );
  }

}

ReactDOM.render(<Demo />);
```
<!--end-code-->