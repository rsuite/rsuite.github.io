
### 禁用

<!--start-code-->
```js

const instance = (
  <div>
    <Slider disabled />
    <br/>
    <Slider value={50} min={10} step={10} max={100} graduated progress disabled />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
