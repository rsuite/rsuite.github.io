### 激活状态

<!--start-code-->
```js

const items = ['A','B','C','D'];

class Demo extends React.Component{
  constructor(){
    super();
    this.state={
      activeKey:'A'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey){
    this.setState({activeKey});
  }
  render(){
    return (
      <Nav onSelect={this.handleSelect} style={{width:200}}>
        {
          items.map((item)=>(
            <Nav.Item
              key={item}
              eventKey={item}
              active={item===this.state.activeKey}
            >
              Item {item}
            </Nav.Item>
          ))
        }
      </Nav>
    );
  }
}

ReactDOM.render(<Demo/>);
```
<!--end-code-->
