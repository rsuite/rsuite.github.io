### Custom options

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance=(
  <CheckPicker
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
    renderValue={(value, items) => {
      return (
        <span>
          <span style={{color:'#575757'}}>
            <i className="icon icon-user" /> Users :
          </span> {value.join(' , ')}
        </span>
      );
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->