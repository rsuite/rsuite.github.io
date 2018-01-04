### 尺寸
<!--start-code-->
```js

class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  open(size) {
    this.setState({
      size,
      show: true
    });
  }
  render() {
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button size="lg" onClick={()=>this.open('lg')}>Large</Button>
          <Button size="md" onClick={()=>this.open('md')}>Medium</Button>
          <Button size="sm" onClick={()=>this.open('sm')}>Small</Button>
          <Button size="xs" onClick={()=>this.open('xs')}>Xsmall</Button>
        </ButtonToolbar>
        <Modal
          size={this.state.size}
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

ReactDOM.render(<Demo />);
```
<!--end-code-->