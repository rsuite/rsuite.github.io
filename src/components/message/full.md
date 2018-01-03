
### 消息框撑满容器

<!--start-code-->
```js
const instance = (
 <div style={{height:200, background:'#ddd', position:'relative'}}>
   <div style={{position:'absolute', top:-28, left:-18, width:'calc(100% + 36px)'}}>
      <Message
        full
        showIcon
        type="warning"
        description="Warning"
      />
    </div>
 </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
