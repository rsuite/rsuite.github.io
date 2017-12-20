### 受控的 Radio 组


<!--start-code-->
```js
class Demo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:'A'
    };
  }
  render(){
    return (
      <RadioGroup
          inline
          name="radioList"
          value={this.state.value}
          onChange={(value)=>{
            console.log(value,'onChange');
            this.setState({value})
          }}
        >
        <Radio value="A">Item A</Radio>
        <Radio value="B">Item B</Radio>
        <Radio value="C">Item C</Radio>
        <Radio value="D" disabled>Item D</Radio>
      </RadioGroup>
    )
  }
}

ReactDOM.render(<Demo/>);
```
<!--end-code-->