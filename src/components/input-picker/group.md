### 分组

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const instance = (
  <div>
    <InputPicker data={data} groupBy="role" style={{ width: 224 }} />
    <hr />
    <h5>排序:</h5>
    <InputPicker
      data={data}
      groupBy="role"
      sort={isGroup => {
        if (isGroup) {
          return (a, b) => {
            return compare(a.groupTitle, b.groupTitle);
          };
        }

        return (a, b) => {
          return compare(a.value, b.value);
        };
      }}
      style={{ width: 224 }}
    />
  </div>
);

function compare(a, b) {
  let nameA = a.toUpperCase();
  let nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}
ReactDOM.render(instance);
```

<!--end-code-->
