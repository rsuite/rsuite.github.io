### 异步

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

class AsynExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
      cacheData: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.getUsers('react');
  }

  handleSelect(value, item, event) {
    const { cacheData } = this.state;
    _.remove(cacheData, v => v === value);
    cacheData.push(item);
    this.setState({
      cacheData
    });
  }

  getUsers(word) {
    if (!word) {
      return;
    }
    this.setState({
      loading: true
    });

    fetch(`https://api.github.com/search/users?q=${word}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          items: data.items
        });
      })
      .catch(e => console.log('Oops, error', e));
  }

  handleSearch(word) {
    this.getUsers(word);
  }
  render() {
    const { items, loading } = this.state;
    return (
      <TagPicker
        data={items}
        cacheData={this.state.cacheData}
        style={{ width: 300 }}
        menuStyle={{ width: 300 }}
        labelKey="login"
        valueKey="id"
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
        renderMenu={menu => {
          if (loading) {
            return (
              <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
                <Icon icon="spinner" spin /> Loading...
              </p>
            );
          }
          return menu;
        }}
      />
    );
  }
}

ReactDOM.render(<AsynExample />);
```

<!--end-code-->
