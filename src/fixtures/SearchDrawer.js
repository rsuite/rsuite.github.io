import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import algoliasearch from 'algoliasearch';
import { Link } from 'react-router';
import { Drawer, FormControl } from '../rsuiteSource';


class SearchDrawer extends Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
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
      this.setState({
        list: get(res, 'hits') || []
      });
    });
  }
  handleSearch = (keyword) => {
    if (keyword === '') {
      this.setState({ list: [] });
    }
    this.setState({ keyword }, () => {
      this.querySearch(keyword);
    });
  }
  handleClick = () => {
    const { onHide } = this.props;
    onHide && onHide();
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
            value={this.state.keyword}
            onChange={this.handleSearch}
          />
          <ul className="search-list">
            {list.map((item, index) => {
              let component = _.get(item, 'component');
              let content = _.get(item, 'content');
              let title = _.get(item, ['_highlightResult', 'title', 'value']);
              title = `${component} > ${title.replace(/`/ig, '')}`;
              let url = `/components/${component}`;

              return (
                <li key={index}>

                  {
                    title.indexOf('<em>') !== -1 ? (
                      <Link
                        to={url}
                        onClick={this.handleClick}
                        dangerouslySetInnerHTML={{ __html: `${title}<p>${content}</p>` }} />
                    ) : (
                        <Link onClick={this.handleClick} to={url}>{title}<p>{content}</p></Link>
                      )
                  }
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