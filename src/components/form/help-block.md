### 帮助提醒

<!--start-code-->
```js


class HelpBlockDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      validationState:null
    };
  }
  handleState(validationState){

    this.setState({validationState})
  }
  render() {
    console.log(this.state.validationState);
    return (
      <div>
        <FormGroup validationState={this.state.validationState} >
          <FormControl />
          <HelpBlock>
            <Icon icon="info2" /> 该字段为必填项
          </HelpBlock>
        </FormGroup>
        <Button onClick={()=>{this.handleState('')}}>Default</Button>
        <Button onClick={()=>{this.handleState('success')}}>Success</Button>
        <Button onClick={()=>{this.handleState('warning')}}>Warning</Button>
        <Button onClick={()=>{this.handleState('error')}}>Error</Button>
      </div>
    );
  }
}

ReactDOM.render(<HelpBlockDemo />);

```
<!--end-code-->
