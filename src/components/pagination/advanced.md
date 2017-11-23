### 高级选项

```js

class PaginationAdvanced extends React.Component{
  constructor(props){
    super(props);
    this.state={
       activePage: 1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }
  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        pages={30}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect}
      />
    );
  }


}

ReactDOM.render(<PaginationAdvanced />, mountNode);
```