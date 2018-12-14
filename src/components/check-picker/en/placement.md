### Placement

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const CustomCheckPicker = ({ placement, ...rest }) => (
  <CheckPicker
    style={{ width: 150 }}
    data={data}
    placement={placement}
    placeholder={placement}
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
            <CustomCheckPicker placement="topLeft" />
          </td>
          <td>
            <CustomCheckPicker placement="topRight" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <CustomCheckPicker placement="leftTop" />
          </td>
          <td />
          <td />
          <td>
            <CustomCheckPicker placement="rightTop" />
          </td>
        </tr>
        <tr>
          <td>
            <CustomCheckPicker placement="leftBottom" />
          </td>
          <td />
          <td />
          <td>
            <CustomCheckPicker placement="rightBottom" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <CustomCheckPicker placement="bottomLeft" />
          </td>
          <td>
            <CustomCheckPicker placement="bottomRight" />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <CustomCheckPicker placement="auto" />
    <hr />
    <CustomCheckPicker
      placement="autoVerticalRight"
      style={{ width: 200 }}
    />{' '}
    <CustomCheckPicker placement="autoVerticalLeft" style={{ width: 200 }} />
    <hr />
    <CustomCheckPicker
      placement="autoHorizontalTop"
      style={{ width: 200 }}
    />{' '}
    <CustomCheckPicker
      placement="autoHorizontalBottom"
      style={{ width: 200 }}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

> Tip: When set to `auto*`, try to scroll the page, or change the browser size, it will automatically appear in the right place.
