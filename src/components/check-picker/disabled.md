### 禁用

<!--start-code-->
```js
const instance=(
  <div>
    <CheckPicker
      data={data}
      defaultValue={['Julius']}
      disabled
    />
    <hr />
    <p>禁用选项</p>
    <CheckPicker
      data={data}
      defaultValue={['Julius']}
      disabledItemValues={['Eugenia', 'Travon', 'Vincenza']}
    />
  </div>
)
ReactDOM.render(instance);
```
<!--end-code-->