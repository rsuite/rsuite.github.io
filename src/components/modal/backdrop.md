### 背景板

<!--start-code-->
```js

class ModalsBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      backdrop:false,
      show: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ show: false});
  }
  open() {
    this.setState({ show: true });
  }
  render() {
    const { backdrop, show } = this.state;
    return (
      <div className="modal-container">
       背景板：
       <Toggle
          checked={backdrop}
          onChange={(checked)=>{
            this.setState({ backdrop: checked })
          }}
        />
        <hr/>
        <ButtonToolbar>
          <Button onClick={this.open}> Open</Button>
        </ButtonToolbar>

        <Modal
            backdrop={backdrop}
            show={show}
            onHide={this.close}
          >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Paragraph />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} appearance="primary">Confirm</Button>
            <Button onClick={this.close} appearance="subtle">Cancel</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

ReactDOM.render(<ModalsBasic />);
```
<!--end-code-->