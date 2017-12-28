
### 消息框撑满容器

<!--start-code-->
```js
const instance = (
 <div style={{height:200, background:'#ddd', position:'relative'}}>
   <Message
    full
    showIcon
    type="warning"
    description="Warning"
  />
 </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
