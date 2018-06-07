### 位置

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const CustomTreePicker = ({ placement }) => (
  <CheckTreePicker
    defaultExpandAll
    data={data}
    placement={placement}
    placeholder={placement}
    height={320}
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
    <CustomTreePicker placement="autoVerticalRight" />
    <CustomTreePicker placement="autoVerticalLeft" />
    <CustomTreePicker placement="autoHorizontalTop" />
    <CustomTreePicker placement="autoHorizontalBottom" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
