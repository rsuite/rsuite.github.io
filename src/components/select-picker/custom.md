### 自定义选项

<!--start-code-->
```js
const instance=(
  <SelectPicker
    data={data}
    groupBy="role",
    renderMenuItem={(label, item) => {
      return <div><i className="icon icon-user" /> {label}</div>;
    }}
    renderMenuItemGroup={(label, item) => {
      return (
        <div>
          <i className="icon icon-group" /> {label} - ({item.children.length})
        </div>
      );
    }}
    renderPlaceholder={(placeholder, item) => {
      if (!placeholder) {
        return placeholder;
      }
      return (
        <div>
          <i className="icon icon-user" /> {placeholder}
        </div>
      );
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->