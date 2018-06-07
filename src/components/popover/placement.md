### 位置

<!--start-code-->

```js
const Speaker = ({ content, ...props }) => {
  return (
    <Popover title="Title" {...props}>
      <p>This is a Popover </p>
      <p>{content}</p>
    </Popover>
  );
};

const CustomComponent = ({ placement }) => (
  <Whisper
    placement={placement}
    trigger="click"
    speaker={<Speaker content={`I am positioned to the ${placement}`} />}
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
