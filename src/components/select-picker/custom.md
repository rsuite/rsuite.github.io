### 自定义选项

<!--start-code-->
```js
const instance=(
  <SelectPicker
    data={data}
    groupBy="role"
    placeholder="Select User"
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
          <span style={{color:'#575757'}}>
            <i className="icon icon-user" /> User :
          </span>  {label}
        </div>
      );
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->