import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import algoliasearch from 'algoliasearch';
import { Drawer, FormControl } from '../rsuiteSource';


class SearchDrawer extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.initIndex();
  }
  initIndex() {
    const client = algoliasearch('PTK5IGAK3K', 'dd3a62fc583bb0749dafa15cc61588bf');
    this.index = client.initIndex('rsuite-zh');
  }
  querySearch(query, cb) {
    if (!query) {
      return;
    }
    this.index.search({ query, hitsPerPage: 6 }, (err, res) => {
      console.log(res, 'res');
      this.setState({
        list: get(res, 'hits') || []
      });
    });
  }
  handleSearch = (keyword) => {
    this.querySearch(keyword);
  }
  render() {

    const { show, onHide } = this.props;
    const { list } = this.state;

    return (
      <Drawer
        placement="left"
        size="xs"
        show={show}
        onHide={onHide}
      >
        <Drawer.Header>
          <Drawer.Title>搜索</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <FormControl
            placeholder="搜索..."
            className="search-input"
            onChange={debounce(this.handleSearch, 400)}
          />
          <ul className="search-list">
            {list.map((item, index) => {
              let component = _.get(item, 'component');
              let title = _.get(item, ['_highlightResult', 'title', 'value']);
              title = `${component} > ${title.replace(/`/ig, '')}`;

              return (
                <li key={index}>

                  {title.indexOf('<em>') !== -1 ? (
                    <a dangerouslySetInnerHTML={{ __html: title }} />
                  ) : <a>{title}</a>}
                </li>
              );
            })}
          </ul>
        </Drawer.Body>
      </Drawer>
    );
  }
}

export default SearchDrawer;