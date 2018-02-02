
### 显示刻度

<!--start-code-->
```js

const instance = (
  <div>
    <Slider value={10} min={0} step={5} max={100} graduated />

    <br />
    <Slider value={40} min={0} step={10} max={100} graduated progress />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
