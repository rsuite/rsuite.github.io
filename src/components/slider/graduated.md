### 显示刻度

<!--start-code-->

```js
const instance = (
  <div>
    <Slider defaultValue={50} min={10} step={10} max={100} graduated />

    <br />
    <Slider defaultValue={50} min={10} step={10} max={100} graduated progress />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
