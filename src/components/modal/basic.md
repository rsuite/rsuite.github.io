### 默认

<!--start-code-->
```js

class ModalsBasic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={this.open}> Open</Button>
        </ButtonToolbar>

        <Modal
            show={this.state.show}
            onHide={this.close}
          >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Modal Body</h4>
            <Paragraph count={3} />
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

ReactDOM.render(<ModalsBasic />);
```
<!--end-code-->