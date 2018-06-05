### 位置

<!--start-code-->

```js
const CustomDatePicker = ({ placement }) => (
  <DatePicker placement={placement} placeholder={placement} />
);

const instance = (
  <div>
    <table className="placement-table">
      <tbody>
        <tr>
          <td />
          <td>
            <CustomDatePicker placement="topLeft" />
          </td>
          <td>
            <CustomDatePicker placement="topRight" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <CustomDatePicker placement="leftTop" />
          </td>
          <td />
          <td />
          <td>
            <CustomDatePicker placement="rightTop" />
          </td>
        </tr>
        <tr>
          <td>
            <CustomDatePicker placement="leftBottom" />
          </td>
          <td />
          <td />
          <td>
            <CustomDatePicker placement="rightBottom" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <CustomDatePicker placement="bottomLeft" />
          </td>
          <td>
            <CustomDatePicker placement="bottomRight" />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />

    <CustomDatePicker placement="auto" />
    <CustomDatePicker placement="autoVerticalRight" />
    <CustomDatePicker placement="autoVerticalLeft" />
    <CustomDatePicker placement="autoHorizontalTop" />
    <CustomDatePicker placement="autoHorizontalBottom" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

> 提示：设置为 `auto*`时， 尝试滚动页面，或者改变浏览器大小，会自动显示在合适的位置。
