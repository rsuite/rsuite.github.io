### 属性叠加

<!--start-code-->
```js
const tableInstance = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Title</th>
        <th>PV</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>http://wwww.hypers.com/</td>
        <td>HYPERS</td>
        <td>12342</td>
      </tr>
      <tr>
        <td>2</td>
        <td>http://www.hypers.com/about/</td>
        <td>About - HYPERS</td>
        <td>3253</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Total</td>
        <td>15595</td>
      </tr>
    </tbody>
  </Table>
);

ReactDOM.render(tableInstance, mountNode);
```
<!--end-code-->