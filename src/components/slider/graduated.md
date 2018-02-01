
### 显示刻度

<!--start-code-->
```js

const instance = (
  <div>
    <br />
    <Slider value={10} min={0} step={1} max={100} graduated />

    <br />
    <Slider value={40} min={0} step={10} max={100} graduated />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
