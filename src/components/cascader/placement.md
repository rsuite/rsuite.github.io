### 位置

<!--start-code-->
```js

const CustomCascader=({placement})=>(
  <Cascader
    data={data}
    placement={placement}
    placeholder={placement}
    valueKey="name"
    labelKey="name"
  />
);

const instance = (
  <table>
    <tbody>
      <tr>
        <td></td>
        <td>
          <CustomCascader placement="topLeft" />
        </td>
        <td>
          <CustomCascader placement="topRight" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <CustomCascader placement="leftTop" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomCascader placement="rightTop" />
        </td>
      </tr>
      <tr>
        <td>
          <CustomCascader placement="leftBottom" />
        </td>
        <td></td>
        <td></td>
        <td>
          <CustomCascader placement="rightBottom" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <CustomCascader placement="bottomLeft" />
        </td>
        <td>
          <CustomCascader placement="bottomRight" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

);
ReactDOM.render(instance);
```
<!--end-code-->