### 旋转和翻转

<!--start-code-->
```js
const instance = (
  <div className='icon-example-list'>
    <IconFont icon='shield' rotate={90} />
    <IconFont icon='shield' rotate={180} />
    <IconFont icon='shield' rotate={270} />
    <IconFont icon='shield' flip="horizontal" />
    <IconFont icon='shield' flip="vertical" />
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
