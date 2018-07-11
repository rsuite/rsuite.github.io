### Use with the button

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/city.js
 */

const instance = (
  <div>
    <TreePicker data={data}  toggleComponentClass={Button} />
    <hr />
    <TreePicker data={data} block toggleComponentClass={Button} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
