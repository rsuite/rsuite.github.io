### Placement

* `left` , `top` , `right` , `bottom` is in 4 directions, indicating the location of the display.
* `leftTop` , A top is added to the left, and here is the alignment, which indicates that the left-hand side of the trigger point is displayed and is aligned.

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
);
ReactDOM.render(instance);
```

<!--end-code-->
