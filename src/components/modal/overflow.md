### 滚动条
<!--start-code-->
```js

class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overflow:false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({show: false});
  }
  open(event) {
    this.setState({show: true });
  }
  render() {
    const { overflow, show } = this.state;
    return (
      <div className="modal-container">
        <Toggle
          checked={overflow}
          onChange={(checked)=>{
            this.setState({ overflow:checked });
          }}
        />  overflow

        <ButtonToolbar>
          <Button onClick={this.open}>Open</Button>
        </ButtonToolbar>
        <Modal
          overflow={overflow}
          show={show}
          onHide={this.close}
          >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Modal.Body</h4>
            <p>Modal.Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} appearance="primary">Confirm</Button>
            <Button onClick={this.close} >Cancel</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }

}

ReactDOM.render(<Demo />);
```
<!--end-code-->