### 基本用法
<!--start-code-->
```js

class ModalsBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      autoResizeHeight: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      showModal: false
    });
  }
  open(event) {
    this.setState({
      showModal: true,
      autoResizeHeight: event.currentTarget.innerText === 'Auto Resize Height'
    });
  }
  render() {
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button shape="default" onClick={this.open}> Show Modal</Button>
          <Button shape="default" onClick={this.open}> Auto Resize Height</Button>
        </ButtonToolbar>
        <Modal
          autoResizeHeight={this.state.autoResizeHeight}
          show={this.state.showModal}
          onHide={this.close}
          onExit={(a)=>{console.log('onExit',a)}}
          onShow={(a)=>{console.log('onShow',a)}}
          onEnter={(a)=>{console.log('onEnter',a)}}
          onEntering={(a)=>{console.log('onEntering',a)}}
          onEntered={(a)=>{console.log('onEntered',a)}}
          onExit={(a)=>{console.log('onExit',a)}}
          onExiting={(a)=>{console.log('onExiting',a)}}
          onExited={(a)=>{console.log('onExited',a)}}
          >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Modal.Body</h4>
            <p>Modal.Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} shape="primary">Confirm</Button>
            <Button onClick={this.close} shape="default">Cancel</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }

}

ReactDOM.render(<ModalsBasic />);
```
<!--end-code-->