### Placement

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */


const CustomSelectPicker=({placement})=>(
  <SelectPicker data={data} placement={placement} placeholder={placement} />
);

const instance = (
  <table className="placement-table">
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