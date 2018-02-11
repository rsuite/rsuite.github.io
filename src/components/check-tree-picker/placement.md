### 位置

<!--start-code-->
```js

const CustomSelectPicker=({placement})=>(
  <CheckTreePicker
    defaultExpandAll
    data={data}
    placement={placement}
    placeholder={placement}
    height={320}
  />
);

const instance = (
  <table>
    <tbody>
      <tr>
        <td></td>
        <td>
          <CustomSelectPicker placement="topLeft" />
        </td>
        <td>
          <CustomSelectPicker placement="topRight" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <CustomSelectPicker placement="leftTop" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomSelectPicker placement="rightTop" />
        </td>
      </tr>
      <tr>
        <td>
          <CustomSelectPicker placement="leftBottom" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomSelectPicker placement="rightBottom" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <CustomSelectPicker placement="bottomLeft" />
        </td>
        <td>
          <CustomSelectPicker placement="bottomRight" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

);
ReactDOM.render(instance);
```
<!--end-code-->