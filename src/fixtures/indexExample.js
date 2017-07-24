/**
 * RSUITE 是由 HYPERS 前端团队开发的，面向企业级后台产品的一套前端解决方案，
 * 并致力于改善前端工程师的开发体验。
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <Header inverse>
          <div className="page-container">
            <Navbar.Header>
              <Navbar.Brand className="logo">
                RSUITE
              </Navbar.Brand>
            </Navbar.Header>
          </div>
        </Header>
        <div className="container">
          <RSTable.Table
            height={800}
            data={tableData}
          >
            <RSTable.Column width={200} fixed>
              <RSTable.HeaderCell>Component</RSTable.HeaderCell>
              <NameCell dataKey="name" />
            </RSTable.Column>

            <RSTable.Column width={200}  >
              <RSTable.HeaderCell>Intro</RSTable.HeaderCell>
              <RSTable.Cell dataKey="intro" />
            </RSTable.Column>
          </RSTable.Table>
        </div>
      </div>
    );
  }
}

const NameCell = ({ rowData, dataKey, ...props }) => {
  return (
    <RSTable.Cell  {...props}>
      <a target="_blank" href={rowData.url} >
        <i className={rowData.icon}></i>
        {' '}
        <label>{rowData.name}</label>
      </a>
    </RSTable.Cell>
  );
};

ReactDOM.render(<App />, mountNode);
