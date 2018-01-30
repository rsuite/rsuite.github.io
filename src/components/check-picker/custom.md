### 自定义选项

<!--start-code-->
```js
const instance=(
  <CheckPicker
    data={data}
    groupBy="role"
    renderMenuItem={(label, item) => {
      return <div><i className="icon icon-user" /> {label}</div>;
    }}
    renderMenuGroup={(label, item) => {
      return (
        <div>
          <i className="icon icon-group" /> {label} - ({item.children.length})
        </div>
      );
    }}
    renderValue={(label, item) => {
      return (
        <div>
          <i className="icon icon-user" /> {label}
        </div>
      );
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->