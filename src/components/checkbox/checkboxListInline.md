### 横向排列多选框组


<!--start-code-->
```js
class Demo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:['A', 'C']
    };
  }
  render(){
    return (
      <Form>

        <FormGroup controlId='checkboxList'>
          <CheckboxGroup
              inline
              name="checkboxList"
              value={this.state.value}
              onChange={(value)=>{
                console.log(value,'onChange');
                this.setState({value})
              }}
            >
            <Checkbox value="A">Item A</Checkbox>
            <Checkbox value="B">Item B</Checkbox>
            <Checkbox value="C">Item C</Checkbox>
            <Checkbox value="D" disabled>Item D</Checkbox>
          </CheckboxGroup>
        </FormGroup>
      </Form>
    )
  }
}

ReactDOM.render(<Demo/>);
```
<!--end-code-->