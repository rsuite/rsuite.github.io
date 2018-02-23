
### 线形进度

<!--start-code-->
```js
const { Line } = Progress;
const instance = (
  <div>
    <Line percent={30} />
    <Line percent={30} showInfo={false} />
    <Line percent={30} strokeColor="red" />
    <Line percent={30} status='success' />
    <Line percent={30} status='fail' />

  </div>
)

ReactDOM.render(instance);

```
<!--end-code-->
