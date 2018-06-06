### 位置

* `left` , `top` , `right` , `bottom` 是 4 个方向, 表示显示的位置。
* `leftTop` , 在 left 后面加了一个 top, 这里的 top 是对齐方式，表示在触发点的左侧显示，同时居上对齐。

<!--start-code-->

```js
const CustomComponent = ({ placement }) => (
  <Whisper
    placement={placement}
    speaker={
      <Tooltip>This is a ToolTip for simple text hints. It can replace the title property</Tooltip>
    }
  >
    <Button appearance="subtle">{placement}</Button>
  </Whisper>
);

const instance = (
  <div>
    <table className="placement-table" cellSpacing={5}>
      <tbody>
        <tr>
          <td />
          <td>
            <CustomComponent placement="topLeft" />
          </td>
          <td>
            <CustomComponent placement="top" />
          </td>
          <td>
            <CustomComponent placement="topRight" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <CustomComponent placement="leftTop" />
          </td>
          <td />
          <td />
          <td />
          <td>
            <CustomComponent placement="rightTop" />
          </td>
        </tr>
        <tr>
          <td>
            <CustomComponent placement="left" />
          </td>
          <td />
          <td />
          <td />
          <td>
            <CustomComponent placement="right" />
          </td>
        </tr>

        <tr>
          <td>
            <CustomComponent placement="leftBottom" />
          </td>
          <td />
          <td />
          <td />
          <td>
            <CustomComponent placement="rightBottom" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <CustomComponent placement="bottomLeft" />
          </td>
          <td>
            <CustomComponent placement="bottom" />
          </td>
          <td>
            <CustomComponent placement="bottomRight" />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />

    <CustomComponent placement="auto" />
    <CustomComponent placement="autoVerticalRight" />
    <CustomComponent placement="autoVerticalLeft" />
    <CustomComponent placement="autoHorizontalTop" />
    <CustomComponent placement="autoHorizontalBottom" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
