### 尺寸

<!--start-code-->

```js
class PaginationBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 5
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div>
        <Pagination
          size="lg"
          pages={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
        <Divider />
        <Pagination
          size="md"
          pages={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
        <Divider />
        <Pagination
          size="sm"
          pages={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<PaginationBasic />);
```

<!--end-code-->
