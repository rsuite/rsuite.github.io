### 位置

<!--start-code-->
```js

const CustomCheckPicker=({placement})=>(
  <CheckPicker data={data} placement={placement} placeholder={placement} />
);

const instance = (
  <table className="placement-table">
    <tbody>
      <tr>
        <td></td>
        <td>
          <CustomCheckPicker placement="topLeft" />
        </td>
        <td>
          <CustomCheckPicker placement="topRight" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <CustomCheckPicker placement="leftTop" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomCheckPicker placement="rightTop" />
        </td>
      </tr>
      <tr>
        <td>
          <CustomCheckPicker placement="leftBottom" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomCheckPicker placement="rightBottom" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <CustomCheckPicker placement="bottomLeft" />
        </td>
        <td>
          <CustomCheckPicker placement="bottomRight" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

);
ReactDOM.render(instance);
```
<!--end-code-->