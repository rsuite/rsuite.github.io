### Placement

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const CustomTreePicker = ({ placement, ...rest }) => (
  <CheckTreePicker
    style={{ width: 200 }}
    defaultExpandAll
    data={data}
    placement={placement}
    placeholder={placement}
    height={320}
    {...rest}
  />
);

const instance = (
  <div>
    <table className="placement-table">
      <tbody>
        <tr>
          <td />
          <td>
            <CustomTreePicker placement="topLeft" />
          </td>
          <td>
            <CustomTreePicker placement="topRight" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <CustomTreePicker placement="leftTop" />
          </td>
          <td />
          <td />
          <td>
            <CustomTreePicker placement="rightTop" />
          </td>
        </tr>
        <tr>
          <td>
            <CustomTreePicker placement="leftBottom" />
          </td>
          <td />
          <td />
          <td>
            <CustomTreePicker placement="rightBottom" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <CustomTreePicker placement="bottomLeft" />
          </td>
          <td>
            <CustomTreePicker placement="bottomRight" />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <CustomTreePicker placement="auto" />
    <hr />
    <CustomTreePicker
      placement="autoVerticalRight"
      style={{ width: 200 }}
    />{' '}
    <CustomTreePicker placement="autoVerticalLeft" style={{ width: 200 }} />
    <hr />
    <CustomTreePicker
      placement="autoHorizontalTop"
      style={{ width: 200 }}
    />{' '}
    <CustomTreePicker placement="autoHorizontalBottom" style={{ width: 200 }} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
