
### 圆形进度

<!--start-code-->
```js
const { Circle } = Progress;
const style={
  width:120,
  display:'inline-block',
  marginRight:10
};

const instance = (
  <div>
    <div style={style}><Circle percent={30} /></div>
    <div style={style}><Circle percent={30} showInfo={false} /></div>
    <div style={style}><Circle percent={30} strokeColor="red" /></div>
    <div style={style}><Circle percent={30} status='success' /></div>
    <div style={style}><Circle percent={30} status='fail' /></div>
  </div>
)

ReactDOM.render(instance);
```
<!--end-code-->