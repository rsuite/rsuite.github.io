### 模拟 Select

为每一个 `<Dropdown.Item>` 组件配置一个 `eventKey`,  再通过 `<Dropdown>` 的 `activeKey` 属性控制选中选。

<!--start-code-->
```js

class SelectDropdown extends React.Component{
  constructor(props){
    super(props);
    this.handleSelect=this.handleSelect.bind(this);
    this.state={
      activeKey:'A'
    };
  }
  handleSelect(activeKey){
    this.setState({activeKey})
  }
  render(){
    return (
      <Dropdown activeKey={this.state.activeKey} onSelect={this.handleSelect} >
        <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
        <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
        <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
      </Dropdown>
    );
  }
}

ReactDOM.render(<SelectDropdown/>);
```
<!--end-code-->