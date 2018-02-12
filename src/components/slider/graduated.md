
### 显示刻度

<!--start-code-->
```js

const instance = (
  <div>
    <Slider value={20} min={10} step={5} max={100} graduated />

    <br />
    <Slider value={10} min={10} step={10} max={100} graduated progress />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
